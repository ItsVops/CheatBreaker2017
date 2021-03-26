const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

function createWindow () {
    mainWindow = new BrowserWindow({
        width: 1020,
        height: 676,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        },
        center: true,
        maximizable: false,
        titleBarStyle: false,
        frame: false,
        show: false,
        resizable: false,
        transparent: false
    });
    mainWindow.loadFile(path.join(__dirname, 'index.html'));

    mainWindow.on('closed', () => {
        mainWindow = null
    });

    mainWindow.webContents.on('did-finish-load', () => { 
        mainWindow.show()
        mainWindow.webContents.session.clearCache(function(){
            console.error('Cache cleared')
        });
    });
    
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    }
});
