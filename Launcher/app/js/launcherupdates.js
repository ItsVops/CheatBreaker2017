async function install() {
  const response = await fetch("https://vops.cc");
  const json = await response.json();
  const assetsURL = json['assets_url'];

  const responseA = await fetch(assetsURL);
  const jsonA = await responseA.json();
  const browserDL = jsonA[0]['browser_download_url']

  const launcherDir = process.env.CONFIG_DIRECT_PATH || remote.app.getPath('userData')
  
  fetch(browserDL)
    .then(res => {
      document.getElementById('updating-bar').style.display = "block";
      document.querySelector('.launch-button').classList.add('updating')
      const content = `<i class="fa fa-spinner fa-spin fa-lg fa-fw spinner"></i> ${document.querySelector('.launch-button').innerHTML}`
      document.querySelector('.launch-button').innerHTML = content;
      document.getElementById('launchbtn').value = "Updating Launcher";
        const dest = fs.createWriteStream(path.join(__dirname, '..','installer.exe'));
        res.body.pipe(dest);
        dest.on('close', ()=>{
          setTimeout(() => {
            const execFileSync = require('child_process').execSync;
            execFileSync(path.join(__dirname, '..', 'installer.exe'), []);
            setTimeout(() => {
              closeWindow()
            }, 1000);
          }, 1000);
        })
    });
}

function closeWindow(){
  require('electron').remote.app.quit()
}
