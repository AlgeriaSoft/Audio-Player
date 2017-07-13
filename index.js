const { app, BrowserWindow, Tray, Menu, globalShortcut } = require('electron'),
    path = require('path'),
    url = require('url');
let win, tray;

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
    if (win === null) createWindow();
});

// app.setJumpList([{
//     type: 'custom',
//     name: 'Recent Files',
//     items: [
//         { type: 'file', path: 'E:\\KHALED\\Din\\Anachid\\1.mp3' },
//     ]
// }]);

function createWindow() {
    // globalShortcut.register('CommandOrControl+X', () => {
    //     console.log('CommandOrControl+X is pressed')
    // })

    win = new BrowserWindow({
        width: 360,
        height: 600,
        center: true,
        resizable: false,
        frame: false,
        icon: path.join(__dirname, 'assets/multimedia/images/icon.png')
    });
    tray = new Tray(path.join(__dirname, 'assets/multimedia/images/icon.png'));
    const contextMenu = Menu.buildFromTemplate([{
            label: 'Hide Audio Player',
            // icon: path.join(__dirname, 'assets/multimedia/images/icon.png'),
            click() {
                if (win.isVisible()) {
                    contextMenu.items[0].label = 'Hide Audio Player';
                    tray.setContextMenu(contextMenu);
                    win.hide();
                } else {
                    contextMenu.items[0].label = 'Show Audio Player';
                    tray.setContextMenu(contextMenu);
                    win.show();
                }
            }
        },
        { type: 'separator' }, {
            label: 'Play',
            // icon: path.join(__dirname, 'assets/multimedia/images/play.png'),
            click() {}

        }, {
            label: 'Stop',
            // icon: path.join(__dirname, 'assets/multimedia/images/stop.png'),
            click() {}
        }, {
            label: 'Previous',
            // icon: path.join(__dirname, 'assets/multimedia/images/previous.png'),
            click() {}
        }, {
            label: 'Next',
            // icon: path.join(__dirname, 'assets/multimedia/images/next.png'),
            click() {}
        },
        { type: 'separator' }, {
            label: 'Speed',
            'submenu': [{
                label: 'Faster (fine)',
                click() {}
            }, {
                label: 'Normal Speed',
                click() {}
            }, {
                label: 'Slower (fine)',
                click() {}
            }]
        },
        { type: 'separator' }, {
            label: 'Increase Volume',
            // icon: path.join(__dirname, 'assets/multimedia/images/upVolume.png'),
            click() {}
        }, {
            label: 'Decrease Volume',
            // icon: path.join(__dirname, 'assets/multimedia/images/downVolume.png'),
            click() {}
        }, {
            label: 'Mute',
            // icon: path.join(__dirname, 'assets/multimedia/images/mute.png'),
            click() {}
        },
        { type: 'separator' }, {
            label: 'Exit',
            // icon: path.join(__dirname, 'assets/multimedia/images/exit.png'),
            click() {
                app.exit(0);
            }
        },

    ]);

    tray.setToolTip('Audio Player v1.0.0')
    tray.setContextMenu(contextMenu);
    // win.setMenu(null);
    win.loadURL(url.format({
        pathname: path.join(__dirname, '/index.html'),
        protocol: 'file:',
        slashes: true
    }));

    win.on('closed', () => {
        win = null
    });
}
