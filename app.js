const { app, BrowserWindow } = require("electron");
const path = require("node:path");
const fs = require("node:fs");

const createWindow = () => {
  const win = new BrowserWindow({
    // Size
    width: 800,
    minWidth: 450,
    height: 600,
    minHeight: 350,
    // Icon/Frame/Other
    icon: path.join(__dirname, "./views/iconRounded.png"),
    autoHideMenuBar: true
  });

  win.loadFile(path.join(__dirname, "./views/index.html"));
};

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
