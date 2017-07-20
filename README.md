<p align="center">
  <a href="">
    <img src="assets-dev/multimedia/images/icon.png" width="150">
  </a>

  <h3 align="center">Audio Player</h3>

<p align="center">
    <br>
    <br>
    <a href="https://travis-ci.org/AlgeriaSoft/Audio-Player">
      <img src="https://travis-ci.org/AlgeriaSoft/Audio-Player.svg?branch=master" alt="Travis CI badge">
    </a>
    <a href="https://david-dm.org/AlgeriaSoft/Audio-Player">
      <img src="https://david-dm.org/AlgeriaSoft/Audio-Player/status.svg" alt="dependencies Status badge">
      </a>
    <a href="https://david-dm.org/AlgeriaSoft/Audio-Player#info=devDependencies">
      <img src="https://david-dm.org/AlgeriaSoft/Audio-Player/dev-status.svg" alt="devDependency Status badge">
    </a>
     <a href="https://gitter.im/Audio-Player/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge">
        <img src="https://badges.gitter.im/Audio-Player/Lobby.svg" alt="gitter badge">
    </a>

</p>
  
## Table of Contents
- [About](#about)
- [Features for application](#features-for-application)
- [Features for development](#features-for-development)
- [Progress](#progress)
- [OS Support](#os-support)
- [Downloads](#downloads)
- [Development](#Development)
- [Dev Requirements](#dev-requirements)
- [Copyright and license](#copyright-and-license)


## About

Run Google Play Music as a standalone desktop app. Never again will you have to hunt through your tabs to pause your music, or stop listening to your favourite song because.

Developed by KHALED LAKEHAL.

Audio Player is a trademark of AlgeriaSoft Inc.

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

=======

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

Code copyright 2017 AlgeriaSoft. Code released under the GNU Affero General Public License v3.0.
