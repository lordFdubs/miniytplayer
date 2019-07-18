
const {app, BrowserWindow, Menu, globalShortcut} = require('electron')
const path = require('path')
let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 450,
    height: 180,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  var menu = Menu.buildFromTemplate([
      {
          label: 'Menu',
          submenu: [
              {label:'Adjust Notification Value'},
              {label:'CoinMarketCap'},
              {
                label:'Exit',
                click(){
                  app.quit()
                }
              }
          ]
      }
  ])
  Menu.setApplicationMenu(menu);
  mainWindow.loadFile('miniplayer/index.html')

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', () => {
  createWindow();
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})
