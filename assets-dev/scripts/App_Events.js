import fs from 'fs';
import path from 'path';
import electron from 'electron';
import $ from '../vendor/jquery/jquery.min.js';
import Materialize from '../vendor/materialize/js/materialize.min.js';
import noUiSlider from '../vendor/noUiSlider/nouislider.min.js';
import Vue from '../vendor/vue.min.js';
import TimeDate from './API/TimeDate';
import Validator from './API/Validator';
import UserException from './API/UserException';
import materializeCss from '../vendor/materialize/css/materialize.min.css';
import icons from '../vendor/materialize/fonts/iconfont/material-icons.css';
import nouisliderCss from '../vendor/noUiSlider/nouislider.css';
import animateCss from '../vendor/animate.min.css';
import variablesCss from '../styles/variables.min.css';
import scrollbarCss from '../styles/scrollbar.min.css';
import globalCss from '../styles/global.min.css';
import windowCss from '../styles/window.min.css';
import appCss from '../styles/app.min.css';

class App_Events {
    constructor() {
        let self = this;
        this.config = JSON.parse(fs.readFileSync(path.join(__dirname, `../../config.json`)).toString('utf8'));
        $(document).ready(() => {
            $('a.btn').not('.no-active').click(e => {
                $(e.currentTarget).toggleClass('active');
            });

            this.vue = new Vue({
                el: '#player',
                data: {
                    trackId: 0,
                    tracks: [],
                    progress: null,
                    isLoaded: false,
                    isPlaying: false,
                    currentTime: '00:00',
                    audioDuration: '00:00',
                    currentTimetooltip: '00:00',
                    audioVisualization: {
                        canvas: null,
                        context: null,
                        analyser: null,
                        frameAnimation: null
                    },
                    currentTrack: {
                        path: '',
                        title: '',
                        image: '',
                        info: ''
                    }
                },
                created: function() {
                    let vue = this;
                    this.tracks = self.config.tracks;
                    if (this.tracks.length !== 0) {
                        this.currentTrack.id = this.tracks[0].id;
                        this.currentTrack.path = this.tracks[0].path;
                        this.currentTrack.title = this.tracks[0].title;
                        this.currentTrack.image = this.tracks[0].image;
                        this.currentTrack.info = this.tracks[0].artist === '' && this.tracks[0].year === '' ? '' : this.tracks[0].artist === '' ? this.tracks[0].year : this.tracks[0].year === '' ? this.tracks[0].artist : `${this.tracks[0].artist}  -   ${this.tracks[0].year}`
                    }
                },
                mounted: function() {
                    let vue = this,
                        audioContext = new AudioContext();
                    this.progress = $('#audio-seek-range');
                    this.audioVisualization.canvas = $('#canvas');
                    this.audioVisualization.analyser = audioContext.createAnalyser();
                    this.audioVisualization.analyser.connect(audioContext.destination);
                    this.audioVisualization.context = this.audioVisualization.canvas[0].getContext('2d');
                    audioContext.createMediaElementSource($('#audio')[0]).connect(this.audioVisualization.analyser);
                    noUiSlider.create(this.progress[0], {
                        start: 0,
                        behaviour: 'snap',
                        connect: [true, false],
                        step: 1,
                        range: {
                            'min': 0,
                            'max': 100
                        },
                        tooltips: true,
                        format: {
                            to: function(value) {
                                if (typeof value !== 'undefined' && vue.isLoaded) return TimeDate.buildTimer1(Number(value));
                            },
                            from: Number
                        }
                    });
                    this.progress[0].noUiSlider.on('slide', function(value) {
                        this.currentTime = value[0];
                        $('#audio')[0].currentTime = TimeDate.getTimeStamp(value[0]);
                        this.progress[0].noUiSlider.set(TimeDate.getTimeStamp(value[0]));
                    }.bind(this));
                    this.progress.attr('disabled', true);
                },
                methods: {
                    closeWindow: function() {
                        electron.remote.app.exit(0);
                    },
                    minimizeWindow: function() {
                        electron.remote.getCurrentWindow().minimize();
                    },
                    search: function() {

                    },
                    getId: function(id) {
                        return this.tracks.findIndex(track => {
                            return track.path === id
                        });
                    },
                    add: function() {
                        let tracks = electron.remote.dialog.showOpenDialog(electron.remote.getCurrentWindow(), {
                            title: 'Choose your tracks',
                            filters: [
                                { name: 'Mp3 files', extensions: ['mp3', 'mp2'] },
                                { name: 'Ogg files', extensions: ['ogg'] }
                            ],
                            properties: ['openFile', 'showHiddenFiles', 'multiSelections']
                        });
                        if (typeof tracks !== 'undefined') {
                            let musicmetadata = require('music-metadata');
                            for (let i = 0; i < tracks.length; i++) {
                                let vue = this,
                                    index = vue.tracks.findIndex(track => {
                                        return track.path === tracks[i]
                                    });
                                if (index === -1) {
                                    musicmetadata.parseFile(tracks[i], { duration: true })
                                        .then(function(data) {
                                            vue.tracks.push({
                                                title: 'title' in data.common ? data.common.title : path.basename(tracks[i]).replace(path.extname(tracks[i]), ''),
                                                artist: 'artist' in data.common ? data.common.artist : '',
                                                year: 'date' in data.common ? data.common.date : '',
                                                favorite: false,
                                                duration: TimeDate.buildTimer1(Number(data.format.duration)),
                                                image: 'picture' in data.common ? `data:${data.common.picture[0].format};base64,${new Buffer(data.common.picture[0].data).toString('base64')}` : '',
                                                path: tracks[i]
                                            });
                                            if (i === 0 && vue.currentTrack.path.length === 0) vue.currentTrack = {
                                                path: vue.tracks[0].path,
                                                title: vue.tracks[0].title,
                                                image: vue.tracks[0].image,
                                                info: vue.tracks[0].artist === '' && vue.tracks[0].year === '' ? '' : vue.tracks[0].artist === '' ? vue.tracks[0].year : vue.tracks[0].year === '' ? vue.tracks[0].artist : `${vue.tracks[0].artist}  -   ${vue.tracks[0].year}`
                                            };
                                        });
                                }
                            }
                        }
                    },
                    save: function() {

                    },
                    clearAll: function() {
                        this.tracks = [];
                        this.stop();
                        this.currentTrack = {
                            path: '',
                            title: '',
                            image: '',
                            info: ''
                        }
                    },
                    toggleActiveList: function(e) {
                        $('#player').toggleClass('active-list');
                        $('#player-tracks').toggleClass('hide');
                    },
                    deleteSong: function(id) {
                        let index = this.tracks.findIndex(track => {
                            return track.path === id
                        });
                        if (this.currentTrack.path === this.tracks[index].path) {
                            this.stop();
                            this.currentTrack = {
                                path: '',
                                title: '',
                                image: '',
                                info: ''
                            }
                        }
                        this.tracks.splice(index, 1);
                    },
                    toggleFavorite: function(id) {
                        let index = this.tracks.findIndex(track => {
                            return track.path === id
                        })
                        this.tracks[index].favorite = !this.tracks[index].favorite;
                    },
                    togglecurrentFavorite: function(e) {
                        $(e.currentTarget).find('i.material-icons').text(function(i, text) {
                            return text === 'favorite_border' ? 'favorite' : 'favorite_border';
                        });
                        this.tracks.find(track => {
                            return track.id === this.currentTrack.id
                        }).favorite = $(e.currentTarget).text() === 'favorite' ? true : false;
                    },
                    togglePlay: function(e) {
                        if ($('#audio').attr('src') !== '' && ($('#audio')[0].paused || $('#audio')[0].currentTime === 0)) {
                            if (!this.isLoaded) {
                                this.isLoaded = true;
                                this.progress.removeAttr('disabled');
                                this.progress[0].noUiSlider.updateOptions({
                                    range: {
                                        'min': 0,
                                        'max': $('#audio')[0].duration
                                    }
                                });
                                $('#audio').bind('timeupdate', function(e) {
                                    this.currentTime = TimeDate.buildTimer1($(e.currentTarget)[0].currentTime);
                                    this.progress[0].noUiSlider.set($(e.currentTarget)[0].currentTime);
                                }.bind(this));
                                this.audioVisualizationAnimation();
                                this.audioDuration = TimeDate.buildTimer1($('#audio')[0].duration);
                            }
                            this.isPlaying = true;
                            $('#audio').trigger('play');
                        } else {
                            this.isPlaying = false;
                            $('#audio').trigger('pause');
                        }
                    },
                    stop: function() {
                        this.isLoaded = false;
                        this.isPlaying = false;
                        this.currentTime = '00:00';
                        $('#audio').trigger('pause');
                        this.audioDuration = '00:00';
                        $('#audio')[0].currentTime = 0;
                        this.progress.attr('disabled', true);
                        cancelAnimationFrame(this.frameAnimation);
                    },
                    audioVisualizationAnimation: function() {
                        this.audioVisualization.frameAnimation = requestAnimationFrame(this.audioVisualizationAnimation);
                        let fbc_array = new Uint8Array(this.audioVisualization.analyser.frequencyBinCount),
                            bars = 100;
                        this.audioVisualization.analyser.getByteFrequencyData(fbc_array);
                        this.audioVisualization.context.clearRect(0, 0, this.audioVisualization.canvas[0].width, this.audioVisualization.canvas[0].height);
                        this.audioVisualization.context.fillStyle = '#00CCFF';
                        for (let i = 0; i < bars; i++) {
                            let bar_x = i * 3,
                                bar_width = 2,
                                bar_height = -(fbc_array[i] / 2);
                            this.audioVisualization.context.fillRect(bar_x, this.audioVisualization.canvas[0].height, bar_width, bar_height);
                        }
                    }
                }
            });
        });
    }
}
new App_Events();
