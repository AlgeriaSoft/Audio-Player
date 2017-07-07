import TimeDate from 'API/TimeDate';
import Validator from 'API/Validator';
import UserException from 'API/UserException';

class App_Events {
    constructor() {
        let self = this;
        this.fs = require('fs');
        this.path = require('path');
        this.electron = require('electron').remote;
        this.config = JSON.parse(this.fs.readFileSync(this.path.join(__dirname, `config.json`)).toString('utf8'));
        $(document).ready(() => {
            $('a.btn').not('.no-active').click(e => {
                $(e.currentTarget).toggleClass('active');
            });
        });
        new Vue({
            el: '#player',
            data: {
                trackId: 0,
                tracks: [],
                audio: null,
                progress: null,
                isLoaded: false,
                isPlaying: false,
                currentTime: '00:00',
                audioDuration: '00:00',
                currentTimetooltip: '00:00',
                currentTrack: {
                    path: '',
                    title: '',
                    artist: '',
                    image: '',
                    year: ''
                }
            },
            created: function() {
                let vue = this;
                this.tracks = self.config.tracks;
                if (this.tracks.length !== 0) {
                    this.currentTrack.id = this.tracks[0].id;
                    this.currentTrack.path = this.tracks[0].path;
                    this.currentTrack.title = this.tracks[0].title;
                    this.currentTrack.artist = this.tracks[0].artist;
                    this.currentTrack.year = this.tracks[0].year;
                }
                $('#audio').bind('timeupdate', function() {
                    vue.progress[0].noUiSlider.set($('#audio')[0].currentTime);
                    vue.currentTime = TimeDate.buildTimer1($('#audio')[0].currentTime);
                });
            },
            mounted: function() {
                let vue = this;
                noUiSlider.create($('#audio-seek-range')[0], {
                    start: 0,
                    behaviour: 'hover-tap',
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
                this.progress = $('#audio-seek-range');
                this.progress[0].noUiSlider.on('slide', function(value) {
                    this.currentTime = value[0];
                    $('#audio')[0].currentTime = TimeDate.getTimeStamp(value[0]);
                    this.progress[0].noUiSlider.set(TimeDate.getTimeStamp(value[0]));
                }.bind(this));
                this.progress[0].noUiSlider.on('hover', function(value) {
                    vue.currentTimetooltip = TimeDate.buildTimer1(value);
                });
                this.progress.attr('disabled', true);
            },
            methods: {
                closeWindow: function() {
                    self.electron.app.exit(0);
                },
                minimizeWindow: function() {
                    self.electron.getCurrentWindow().minimize();
                },
                search: function() {

                },
                add: function() {
                    let tracks = self.electron.dialog.showOpenDialog(self.electron.getCurrentWindow(), {
                        title: 'Choose your tracks',
                        filters: [
                            { name: 'Mp3 files', extensions: ['mp3', 'mp2'] },
                            { name: 'Ogg files', extensions: ['ogg'] }
                        ],
                        properties: ['openFile', 'showHiddenFiles', 'multiSelections']
                    });
                    let fs = require('fs');
                    let probe = require('child_process').spawnSync;
                    for (let i = 0; i < tracks.length; i++) {
                        let vue = this,
                            index = vue.tracks.findIndex(track => {
                                return track.path === tracks[i]
                            });
                        if (index === -1) {
                            let data = JSON.parse(probe(self.path.join(__dirname, 'ffprobe'), ['-v', 'quiet', '-print_format', 'json', '-show_format', tracks[i]], {
                                encoding: 'utf8'
                            }).stdout);
                            console.log(data);
                            vue.tracks.push({
                                title: typeof data.format.tags.title === 'undefined' ? self.path.basename(tracks[i]).replace(self.path.extname(tracks[i]), '') : data.format.tags.title,
                                artist: typeof data.format.tags.artist === 'undefined' ? '' : data.format.tags.artist,
                                year: typeof data.format.tags.date === 'undefined' ? '' : data.format.tags.date,
                                favorite: false,
                                duration: TimeDate.buildTimer1(Number(data.format.duration)),
                                image: typeof data.format.tags.picture === 'undefined' ? '' : data.format.tags.picture,
                                path: tracks[i]
                            });
                            if (i === 0) {
                                vue.currentTrack = {
                                    path: vue.tracks[0].path,
                                    title: vue.tracks[0].title,
                                    artist: vue.tracks[0].artist,
                                    image: vue.tracks[0].picture,
                                    year: vue.tracks[0].year
                                };
                            }
                        }
                    }
                },
                save: function() {

                },
                clearAll: function() {
                    this.tracks = [];
                },
                toggleActiveList: function(e) {
                    $('#player').toggleClass('active-list');
                    $('#player-tracks').toggleClass('hide');
                },
                deleteSong: function(id) {
                    let index = this.tracks.findIndex(track => {
                        return track.path === id
                    });
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
                        this.isPlaying = true;
                        $('#audio').trigger('play');
                        if (!this.isLoaded) {
                            this.isLoaded = true;
                            this.progress.removeAttr('disabled');
                            this.progress[0].noUiSlider.updateOptions({
                                range: {
                                    'min': 0,
                                    'max': $('#audio')[0].duration
                                }
                            });
                            this.audioDuration = TimeDate.buildTimer1($('#audio')[0].duration);
                        }
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

                }
            }
        });
    }
}
new App_Events();
