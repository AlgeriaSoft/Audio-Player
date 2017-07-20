<p align="center" style="text-align:center"> 
    <h3 align="center">Audio Player</h3>
</p>
<p align="center" style="text-align:center"> 
    <img lign="center" src="assets-dev/multimedia/images/icon.png" width="150">
</p>
<p align="center">
    <a href="https://github.com/AlgeriaSoft/Audio-Player/releases"><img src="https://img.shields.io/github/release/AlgeriaSoft/Audio-Player.svg" alt="Github Release" /></a>
    <a href=""><img src="https://img.shields.io/github/downloads/AlgeriaSoft/Audio-Player/total.svg" alt="Github All Releases" /></a>
    <a href="https://github.com/AlgeriaSoft/Audio-Player/blob/master/LICENSE"><img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license" /></a>
    <a href="https://badge.fury.io/gh/AlgeriaSoft%2FAudio-Player"><img src="https://badge.fury.io/gh/AlgeriaSoft%2FAudio-Player.svg" alt="GitHub version" /></a>
    <a href="https://david-dm.org/AlgeriaSoft/Audio-Player"><img src="https://david-dm.org/AlgeriaSoft/Audio-Player/status.svg" alt="dependencies status" /></a>
    <a href="https://david-dm.org/AlgeriaSoft/Audio-Player#info=devDependencies"><img src="https://david-dm.org/AlgeriaSoft/Audio-Player/dev-status.svg" alt="devDependency status" /></a>
    <a href="https://travis-ci.org/AlgeriaSoft/Audio-Player"><img src="https://travis-ci.org/AlgeriaSoft/Audio-Player.svg?branch=master" alt="Build Status" /></a>
    <a href="https://codeclimate.com/github/AlgeriaSoft/Audio-Player"><img src="https://codeclimate.com/github/AlgeriaSoft/Audio-Player/badges/gpa.svg" alt="Code Climate" /></a>
    <a href="https://coveralls.io/github/AlgeriaSoft/Audio-Player?branch=master"><img src="https://coveralls.io/repos/github/AlgeriaSoft/Audio-Player/badge.svg?branch=master" alt="Coverage Status" /></a>
    <a href="http://isitmaintained.com/project/AlgeriaSoft/Audio-Player" title="Average time to resolve an issue"><img src="http://isitmaintained.com/badge/resolution/AlgeriaSoft/Audio-Player.svg" alt="Average time to resolve an issue" /></a>
</p>

## Table of Contents

- [About](#about)
- [Features for application](#features-for-application)
- [Features for development](#features-for-development)
- [Progress](#progress)
- [OS Support](#os-support)
- [Downloads](#downloads)
- [Development](#development)
- [Dev Requirements](#dev-requirements)
- [Copyright and license](#copyright-and-license)


## About

Run Audio player as a standalone desktop app. Never again will you have to hunt through your tabs to pause your music, or stop listening to your favourite song because.

Developed by [KHALED LAKEHAL][1].

Audio Player is a trademark of AlgeriaSoft Inc.

[1]:https://www.facebook.com/khaledLakhel1993.

## Features for application

- Audio effect.
- Sound record.
- :heavy_check_mark: Edit playlist.
- Search for music.
- Automatique update.
- Read music from URL.
- :heavy_check_mark: Create own playlist.
- Read/edit mp3 metadata.
- Download music from URL.
- Change application theme.
- Add automatic/manual sort.
- :heavy_check_mark: Favorite/unfavorite music.
- :heavy_check_mark: Audio Visualization effect.
- Play playlist with random or by order.
- Add musics by dragging or by open file dialog.

## Features for development

- Add WebPack support to project.
- :heavy_check_mark: Add Electron packaging support.
- Add Electron app installer Support.

## Progress

| Feature                                                 | Status        | Notes                             |
|:--------------------------------------------------------|:-------------:|:----------------------------------|
| Audio effect                                            | 0%            |                                   |
| Sound record                                            | 0%            |                                   |
| Edit playlist                                           | 100%          | All planned feature implemented   |
| Search for music                                        | 0%            |                                   |
| Automatique update                                      | 0%            |                                   |
| Read music from URL                                     | 0%            |                                   |
| Create own playlist                                     | 100%          | All planned feature implemented   |
| Read/edit mp3 metadata                                  | 50%           | Edit mp3 metadata                 |
| Download music from URL                                 | 0%            |                                   |                               
| Change application theme                                | 0%            |                                   |
| Favorite/unfavorite music                               | 100%          | All planned feature implemented   |
| Audio visualization effect                              | 100%          | All planned feature implemented   |
| Add sort automatique/manual                             | 0%            |                                   |
| Play playlist with random or by order                   | 0%            |                                   |
| Add musics by dragging or by open file dialog           | 50%           |                                   |
| Add WebPack support to project                          | 80%           | Minimze file size                 |
| Add Electron packaging support                          | 100%          | All planned feature implemented   |
| Add Electron application installer Support              | 0%            |                                   |
| Project status                                          | 37.78%        |                                   |
  

## OS Support

Audio Player is known to run on the following host platforms:

- Windows (32/64 bit)
- OS X (also known as macOS)
- Linux (x86/x86_64)

## Downloads

Head over to our [official download website](https://algeriasoft.github.io/Website/audio-player/download.html) to download the latest release for your platform.

## Development

To get started just run the following commands


```bash
git clone git@github.com:AlgeriaSoft/Audio-Player.git or git clone https://github.com/AlgeriaSoft/Audio-Player.git
npm install -g electron-packager asar
npm install
```


To build the installers / release packages you need to run, you can only build a platforms installer from that platform.


```bash 
# Windows
npm run win

# Linux

npm run linux

# OS X also known as macOS

npm run macOS
# All

npm run all

```

## Dev Requirements

- Node.js (Recommend 8.x.x)
- Electron (1.6.11)
- NPM (5.x.x)

## Copyright and license

MIT License

Copyright (c) 2017 KHALED LAKEHAL

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
