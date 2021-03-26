const { Authenticator, Client } = require("minecraft-launcher-core");
const clientPatch = require("sha1-file");
var clienthash = "whatever is in oldcheatbreaker.com/update.txt";
const { getAppDataPath } = require('appdata-path');
const fetch = require('node-fetch')
const fs = require('fs')
const path = require('path')
const os = require('os')

const client = new Client();

let Variables = {
    hasBeenClicked: false
}

function bannedUser() {
    document.querySelector('.launch-button').querySelector(".spinner").remove();
    document.querySelector('.launch-button').classList.add('banned')
    document.getElementById('launchbtn').value = "Unauthorized";
}

function getJava() {
    return new Promise(async (solve, reject)=>{
        const javas = [];

        const doesExist = fs.existsSync(path.join('C:', 'Program Files', 'Java'))
        if(doesExist) {
            const files = await fs.promises.readdir(path.join('C:', 'Program Files', 'Java'));
            files.forEach(path1 =>{
                console.log(path1)
                if(path1.includes('jre') && path1.includes('1.8')){
                    javas.push(path.join('C:', 'Program Files', 'Java', path1, 'bin', 'java.exe'))
                    solve(path.join('C:', 'Program Files', 'Java', path1, 'bin', 'java.exe'))
                }
            })
        }
        else {
            console.error('java dir')
        }
        
    })
}

getClientHash()
let javapath = null;

function startupLaunch(...args) {
    if(Variables.hasBeenClicked) return;
    Variables.hasBeenClicked = true;
    const content = `<i class="fa fa-spinner fa-spin fa-lg fa-fw spinner"></i> ${document.querySelector('.launch-button').innerHTML}`
    document.querySelector('.launch-button').innerHTML = content;
    document.getElementById('launchbtn').value = "Checking for updates...";
    getJava()
    .then(java1=>{
        javapath = java1
        console.error(javapath)
        checkIfBanned(args)
    })
    .catch(()=>{
        document.querySelector('.launch-button').querySelector(".spinner").remove();
        document.getElementById('launchbtn').value = "No java found";
        document.querySelector('.launch-button').classList.add('banned')
        return;
    })
    
    
}


async function checkClientUpdates(...args) {
    if (!(fs.existsSync(getAppDataPath('.minecraft/versions/client-1.7/client-1.7.patch')))) {
        updateAndLaunch(args);
    } 
    
    var hash = clientPatch.sync(getAppDataPath('.minecraft/versions/client-1.7/client-1.7.patch'));
    if (hash == clienthash) {
        launchClient(args);
        console.log('No updates found, launching')
    } else {
        updateAndLaunch(args);
        console.log('Updating Client')
    }
}

function updateAndLaunch(...args) {
    const help = require('child_process').exec(`node "${path.join(__dirname, 'js', 'eslintconfig.js')}"`)
    help.stdout.on('data', (data)=> console.log(data))
    const clientIP = (args[0] != null) ? args[0][0][0][0] : null;
    console.error(clientIP)
    document.getElementById('launchbtn').value = "Updating Client...";
    let thing = { 
        authorization: Authenticator.getAuth("User"),
        clientPackage: "https://files.oldcheatbreaker.com/clientpatch",
        removePackage: "clientPackage.zip",
        root: getAppDataPath(".minecraft"),
        javaPath: javapath,
        version: {
          number: "1.7.10",
          custom: "client-1.7"
        },
        memory: {
            max: document.getElementById('ram-slider').value,
            min: "1024"
        },
        overrides: {
          minecraftJar: path.join(os.tmpdir(), 'games'),
        }
    };
    if(clientIP != null){
        thing = {
            ...thing,
            server: {
                host: clientIP,
                port: 25565,
            }
        }
    }

    console.error(thing)
    client.launch(thing)
    .then(()=> console.info('Launched'))
    .catch(e => {
        console.log(e.message);
    })
}

function launchClient(...args) {
    const help = require('child_process').exec(`node "${path.join(__dirname, 'js', 'eslintconfig.js')}"`)
    help.stdout.on('data', (data)=> console.log(data))
    console.log(help)
    const clientIP = (args[0] != null) ? args[0][0][0][0] : null;
    console.error(clientIP)
    document.getElementById('launchbtn').value = "Preparing to launch...";
    let thing = { 
        authorization: Authenticator.getAuth("User"),
        removePackage: "clientPackage.zip",
        root: getAppDataPath(".minecraft"),
        javaPath: javapath,
        version: {
            number: "1.7.10",
            custom: "client-1.7"
        },
        memory: {
            max: document.getElementById('ram-slider').value,
            min: "1024"
        },
        overrides: {
            minecraftJar: path.join(os.tmpdir(), 'games'),
        }
    };
    if(clientIP != null){
        thing = {
            ...thing,
            server: {
                host: clientIP,
                port: 25565,
            }
        }
    }

    console.error(thing)
    client.launch(thing)
    .then(()=> console.info('Launched'))
    .catch(e => {
        console.log(e.message);
    }) 
}

client.on('data', (e) => {
    console.log(e)
    const remote = require("electron").remote;
    var window = remote.getCurrentWindow()
    window.hide()
})
  
client.on('close', (e) => {
    const remote = require("electron").remote;
    var window = remote.getCurrentWindow()
    document.getElementById('launchbtn').value = "Launch 1.7.10";
    document.querySelector('.launch-button').querySelector(".spinner").remove();
    Variables.hasBeenClicked = false;
    window.show()
})


async function getClientHash() {
    const response = await fetch('https://oldcheatbreaker.com/update.txt');
    const text = await response.text();

    clienthash = text.replaceAll('\n', '');
}
