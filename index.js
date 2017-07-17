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

function createWindow() {
    win = new BrowserWindow({
        width: 360,
        height: 660,
        center: true,
        resizable: false,
        frame: false,
        icon: path.join(__dirname, 'assets/f1c3675a0f8f7128d114548e2da81a8c.png')
    });
    tray = new Tray(path.join(__dirname, 'assets/f1c3675a0f8f7128d114548e2da81a8c.png'));
    const contextMenu = Menu.buildFromTemplate([{
            label: 'Hide Audio Player',
            // icon: path.join(__dirname, 'assets/f1c3675a0f8f7128d114548e2da81a8c.png'),
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
            // icon: path.join(__dirname, 'assets/play.png'),
            click() {}

        }, {
            label: 'Stop',
            // icon: path.join(__dirname, 'assets/stop.png'),
            click() {}
        }, {
            label: 'Previous',
            // icon: path.join(__dirname, 'assets/previous.png'),
            click() {}
        }, {
            label: 'Next',
            // icon: path.join(__dirname, 'assets/next.png'),
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
            // icon: path.join(__dirname, 'assets/upVolume.png'),
            click() {}
        }, {
            label: 'Decrease Volume',
            // icon: path.join(__dirname, 'assets/downVolume.png'),
            click() {}
        }, {
            label: 'Mute',
            // icon: path.join(__dirname, 'assets/mute.png'),
            click() {}
        },
        { type: 'separator' }, {
            label: 'Exit',
            // icon: path.join(__dirname, 'assets/exit.png'),
            click() {
                app.exit(0);
            }
        },

    ]);

    tray.setToolTip('Audio Player v1.0.0')
    tray.setContextMenu(contextMenu);
    win.setMenu(null);
    win.loadURL(url.format({
        pathname: path.join(__dirname, '/index.html'),
        protocol: 'file:',
        slashes: true
    }));
    win.on('closed', () => {
        win = null
    });
}
