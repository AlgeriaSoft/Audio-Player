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
- [Supported Platforms](#supported-Platforms)
- [Build from source](#build-from-source)
- [Downloads](#downloads)
- [Copyright and license](#copyright-and-license)


## About
Electron audio player with play list v1.0.0

## Features for application

- Audio effect.
- Sound record.
- :heavy_check_mark: Edit music list.
- Search for music.
- Automatique update.
- Read music from URL.
- :heavy_check_mark: Create own music list.
- Read/edit mp3 metadata.
- Download music from URL.
- Change application style.
- Add automatic/manual sort.
- :heavy_check_mark: Favorite/unfavorite music.
- :heavy_check_mark: Audio Visualization effect.
- Play music list with random or by order.
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
| Edit music list                                         | 100%          | All planned feature implemented   |
| Search for music                                        | 0%            |                                   |
| Automatique update                                      | 0%            |                                   |
| Read music from URL                                     | 0%            |                                   |
| Create own music list                                   | 100%          | All planned feature implemented   |
| Read/edit mp3 metadata                                  | 50%           | Edit mp3 metadata                 |
| Download music from URL                                 | 0%            |                                   |                               
| Change application style                                | 0%            |                                   |
| Favorite/unfavorite music                               | 100%          | All planned feature implemented   |
| Audio visualization effect                              | 100%          | All planned feature implemented   |
| Add sort automatique/manual                             | 0%            |                                   |
| Play music list with random or by order                 | 0%            |                                   |
| Add musics by dragging or by open file dialog           | 50%           |                                   |
| Add WebPack support to project                          | 80%           | Minimze file size                 |
| Add Electron packaging support                          | 100%          | All planned feature implemented   |
| Add Electron application installer Support              | 0%            |                                   |
| Project status                                          | 37.78%        |                                   |
  

## Supported Platforms

Audio Player is known to run on the following host platforms:

- Windows (32/64 bit)
- OS X (also known as macOS)
- Linux (x86/x86_64)

## Build from source

First install dependencies npm packages 

```bash
npm install
```

Next install electron-packager and electron archive 

```bash
npm install -g electron-packager asar
```

Finaly choose your buid command:

For window : 
```bash 
npm run win
```
For linux : 
```bash
npm run linux
```
For OS X also known as macOS :
```bash
npm run macOS
```

For All :
```bash
npm run all

## Downloads

Download the latest build from the [official download site](https://algeriasoft.github.io/Website/audio-player/download.html).


## Copyright and license

Code copyright 2017 AlgeriaSoft. Code released under the GNU Affero General Public License v3.0.
