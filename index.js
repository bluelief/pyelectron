// Copyright (c) 2018 bluelief.
// Licensed under the MIT License.

const url = require('url')
const path = require('path')
const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow


const createPyProc = () => {
  //Important. Must to get full path.
  script = path.join(__dirname, 'main.py')
  pyProc = require('child_process').spawn('python', [script])
}


const exitPyProc = () => {
  pyProc.kill()
  pyProc = null
  pyPort = null
}


function createWindow () {
  mainWindow = new BrowserWindow({ width: 800, height: 600, useContentSize: true, resizeable: false })
  mainWindow.center()
  mainWindow.setResizable(false)
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))
  //mainWindow.webContents.openDevTools()
  mainWindow.on('closed', function () {
    mainWindow = null;
  })
}


app.on('ready', createPyProc)

app.on('ready', createWindow)

app.on('will-quit', exitPyProc)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})


app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})