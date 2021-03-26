


function updateRamValue() {
  console.log('aaa')
  const ramslider = document.querySelector('.slider')
  document.getElementById('ram-value').innerHTML = document.getElementById('ram-slider').value + " MB";
  
  fs.writeFileSync(path.join(__dirname, '..', 'ram.json'), JSON.stringify({
    ram: ramslider.value,
  }))

}


function ramLoad() {
  const ramslider = document.querySelector('.slider')
  try {
    const ramm =JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'ram.json'))).ram;
    ramslider.setAttribute('value', ramm)
    document.getElementById('ram-value').innerHTML = ramslider.getAttribute('value') + " MB";
  }
  catch (e){
    ramslider.value = '2048';
    fs.writeFileSync(path.join(__dirname, '..', 'ram.json'), JSON.stringify({
      ram: ramslider.value,
    }))
  }
}
