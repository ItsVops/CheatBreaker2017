const { shell } = require('electron');
var CheatBreaker = require('os')
let Username

function loadHome() {
    document.getElementById("home1-page").style.display = "block";
    document.getElementById("servers-page").style.display = "none";
    document.getElementById("settings-page").style.display = "none";
    document.getElementById("about-page").style.display = "none";
    document.getElementById("hidethis").style.display = "block";
    document.getElementById("drip-why").style.display = "block";
    document.getElementById("drip-why2").style.display = "none";
    document.getElementById("drip-why3").style.display = "none";
    document.getElementById("drip-why4").style.display = "none";

    document.getElementById("header-1").style.display = "block";
    document.getElementById("header-2").style.display = "none";
    document.getElementById("header-3").style.display = "none";
    document.getElementById("header-4").style.display = "none";
}

function loadServers() {
    document.getElementById("home1-page").style.display = "none";
    document.getElementById("servers-page").style.display = "block";
    document.getElementById("settings-page").style.display = "none";
    document.getElementById("about-page").style.display = "none";
    document.getElementById("hidethis").style.display = "none";

    document.getElementById("drip-why").style.display = "none";
    document.getElementById("drip-why2").style.display = "block";
    document.getElementById("drip-why3").style.display = "none";
    document.getElementById("drip-why4").style.display = "none";

    document.getElementById("header-1").style.display = "none";
    document.getElementById("header-2").style.display = "block";
    document.getElementById("header-3").style.display = "none";
    document.getElementById("header-4").style.display = "none";
}

function loadSettings() {
    document.getElementById("home1-page").style.display = "none";
    document.getElementById("servers-page").style.display = "none";
    document.getElementById("settings-page").style.display = "block";
    document.getElementById("about-page").style.display = "none";
    document.getElementById("hidethis").style.display = "none";

    document.getElementById("drip-why").style.display = "none";
    document.getElementById("drip-why2").style.display = "none";
    document.getElementById("drip-why3").style.display = "block";
    document.getElementById("drip-why4").style.display = "none";

    document.getElementById("header-1").style.display = "none";
    document.getElementById("header-2").style.display = "none";
    document.getElementById("header-3").style.display = "block";
    document.getElementById("header-4").style.display = "none";
}

function loadAbout() {
    document.getElementById("home1-page").style.display = "none";
    document.getElementById("servers-page").style.display = "none";
    document.getElementById("settings-page").style.display = "none";
    document.getElementById("about-page").style.display = "block";

    document.getElementById("hidethis").style.display = "none";
    document.getElementById("drip-why").style.display = "none";
    document.getElementById("drip-why2").style.display = "none";
    document.getElementById("drip-why3").style.display = "none";
    document.getElementById("drip-why4").style.display = "block";

    document.getElementById("header-1").style.display = "none";
    document.getElementById("header-2").style.display = "none";
    document.getElementById("header-3").style.display = "none";
    document.getElementById("header-4").style.display = "block";
}


function closeLauncher() {
    window.close();
}

async function onLoad() {


  
    const file = getAppDataPath(".minecraft/launcher_accounts.json")
    let rawdata = fs.readFileSync(file);
    let launcherThing = JSON.parse(rawdata);
    
    const Accountname = document.querySelector('#account-name')
    Username = Object.values(launcherThing.accounts)[0].minecraftProfile.name;
    Accountname.textContent = Username;
    if (Accountname.textContent.length > 9) {
      document.querySelector('.accounthead').style.position = "absolute";
      document.querySelector('.accounthead').style.left = `-${Accountname.textContent.length * 0.7}vw`;
    }

    document.getElementById("account-icon").src = "https://minotar.net/helm/" + Username + "/35.png";

    MinecraftAPI.getServerStatus('minehq.com', {
        port: 25565
      }, function (err, status) {
        if (err) {
            document.getElementById('minehq-online').innerHTML = "(???/???)";
          return console.log('Error loading status');
        }
        document.getElementById('minehq-online').innerHTML = "(" + status.players.now + "/" + status.players.max + ")";
      });

    MinecraftAPI.getServerStatus('arcane.cc', {
        port: 25565
      }, function (err, status) {
        if (err) {
            document.getElementById('arcane-online').innerHTML = "(0/0)";
          return console.log('Error loading status');
        }
        document.getElementById('arcane-online').innerHTML = "(" + status.players.now + "/" + status.players.max + ")";
      });

      MinecraftAPI.getServerStatus('ultra.rip', {
          port: 25565
        }, function (err, status) {
          if (err) {
            document.getElementById('ultra-online').innerHTML = "(0/0)";
            return console.log('Error loading status');
          }
          document.getElementById('ultra-online').innerHTML = "(" + status.players.now + "/" + status.players.max + ")";
        });

        const megabyte = 1048576;
        const os = require('os');
        var cpu = os.cpus()[0]['model'];
        var memory = os.cpus()[0]['model'];
        var totalMemory = Math.round(os.totalmem() / megabyte);

        document.getElementById('cpu-value').innerHTML = cpu;
        document.getElementById('arc-value').innerHTML = CheatBreaker.arch();
        document.getElementById('mem-value').innerHTML = totalMemory + " MB";

        getAllMOTDs();
        ramLoad()
}

function loadChangelog() {
  shell.openExternal('https://oldcheatbreaker.com/download.html')
}