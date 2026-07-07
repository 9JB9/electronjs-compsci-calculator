import { app } from "electron";
import { BrowserWindow } from "electron";

//this is some electron action
function createWindow () {
    //this creates and loads the physical browser window
    const win = new BrowserWindow (); 
    win.maximize();
    //this tells the window to load and run the react stuff
    win.loadURL('http://localhost:5173')
}

//before we call the function we need to make sure that electron is fully loaded
//this is purely a safety net, meaning it technically could work without it
//but not having it, you are risking having it go boom occasionally

//this checks to see if electron is fully loaded, then when it is, it creates our window
app.whenReady().then(() => {
    createWindow()
})