
const { BrowserWindow } = require('electron');
const path = require('path');

const createOverlayWindow = (renderer) => {
  console.log('Opening screenshot overlay...');
  const win = new BrowserWindow({
    title: "ManuScrape Overlay",
    // Remove the default frame around the window
    frame: false,
    fullscreen: true,
    // Hide Electron’s default menu
    autoHideMenuBar: true,
    transparent: true,
    // Do not display our app in the task bar
    // (It will live in the system tray!)
    skipTaskbar: true,
    hasShadow: false,
    show: true,
    resizable: false,
    webPreferences: {
      preload: path.join(__dirname, '../preloads/overlay.js'),
      backgroundThrottling: false,
      webgl: true,
    },
  })

  // win.webContents.openDevTools();

  win.loadFile(renderer);

  return win;
}

module.exports = {
  createOverlayWindow,
}