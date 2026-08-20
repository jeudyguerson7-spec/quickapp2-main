
const { app, BrowserWindow } = require('electron');
const path = require('path');
const { spawn } = require('child_process');

let nextProcess;

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });
  win.loadURL('http://localhost:3000');
}

function startNextServer() {
  // Démarre le serveur Next.js en mode production
  nextProcess = spawn(
    process.platform === 'win32' ? 'npx.cmd' : 'npx',
    ['next', 'start', '-p', '3000'],
    {
      cwd: path.join(__dirname, 'apps', 'web'),
      stdio: 'inherit',
      shell: false,
    }
  );
}

app.whenReady().then(() => {
  startNextServer();
  // Attendre un court délai pour laisser le serveur démarrer
  setTimeout(createWindow, 4000);
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.on('before-quit', () => {
  if (nextProcess) {
    nextProcess.kill();
  }
});
