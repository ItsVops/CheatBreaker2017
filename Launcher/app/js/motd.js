async function getAllMOTDs(){
  const resp = await fetch('https://api.mcsrvstat.us/2/ultra.rip')
  const json = await resp.json()
  const motd = json.motd.html;
  document.querySelector('.ultra-motd').innerHTML = motd;

  const resp2 = await fetch('https://api.mcsrvstat.us/2/arcane.cc')
  const json2 = await resp2.json()
  document.querySelector('.arcane-motd').innerHTML = json2.motd.html;

  try {
    const resp4 = await fetch('https://api.mcsrvstat.us/2/minehq.com')
    const json4 = await resp4.json()
    document.querySelector('.minehq-motd').innerHTML = json4.motd.html;
  }
  catch(e){
    document.querySelector('.minehq-motd').innerHTML = '<p style="color: red;">Unknown host</p>'
  }
}