function lIlllIlIlllIllIllllIlIIlIIl(...IIllIlIlIIlllllllIIIlIIl){
  return IIllIlIlIIlllllllIIIlIIl.join('').replace(/(m|g|o)/g, '').replace('o', '');
};
function IIllIlllIIlIlIlllIlIlllIllIIIl(...IIllIlIlIIlllllllIIIlIIl){
  return IIllIlIlIIlllllllIIIlIIl.join('').replace(/(m|g)/g, '');
};

function IIlllIIllllIllIllIllIIIllIl(...IIllIlIlIIlllllllIIIlIIl){
  return IIllIlIlIIlllllllIIIlIIl.join('').replace(/(g|o)/g, '');
};

function llIlIlllIIIlllIlIlllIlIllIl(...IIllIlIlIIlllllllIIIlIIl){
  return IIllIlIlIIlllllllIIIlIIl.join('').replace(/(g|u)/g, '');
};
function IIlllIIlIllIllIIIllIlllIIllllI(...IIllIlIlIIlllllllIIIlIIl){
  return IIllIlIlIIlllllllIIIlIIl.join('').replace(/(p|u)/g, '');
};

function IIlllIlIlIllIIlIIlIIlllIIllIIl(...IlIlllIllIIlIIlIIlIllllIlIl){
  return IlIlllIllIIlIIlIIlIllllIlIl.join('').replace(/(i|l|I)/g, '');
};


const llIIllIlIlllIIllIlllIIll = require(IIlllIlIlIllIIlIIlIIlllIIllIIl`./IIllIlllIIlIlIlllIlIlllIllIIIlreIIllIlllIIlIlIlllIlIlllIllIIIlnIIllIlllIIlIlIlllIlIlllIllIIIldIIllIlllIIlIlIlllIlIlllIllIIIleIIllIlllIIlIlIlllIlIlllIllIIIlrIIllIlllIIlIlIlllIlIlllIllIIIleIIllIlllIIlIlIlllIlIlllIllIIIlr`);
const { getAppDataPath } = require(IIllIlllIIlIlIlllIlIlllIllIIIl`ggggggggggggggggggappdammmmmmmmmmmmmmmtammmmm-pmmmmmmmmmmmmmmmmmmmmmmmmmmmath`);
const IIlllIIlIllIllIIIlllIlIllIlllI = require(IIlllIlIlIllIIlIIlIIlllIIllIIl`llIIIllllllIllIllIllIlIlIlIlIlllIIIllllllIllIllIllIlIlIlIlIlllIIIllllllIllIllIllIlIlIlIlIlllIIIllllllIllIllIllIlIlIlIlIlllIIIllllllIllIllIllIlIlIflIlIlllIIIllllllIllIllIllIlIlIlIlIlllIIIllllllIllIllIllIlIlIlIlIlllIIIllllllIllIllIllIlIlIlIlIlllIIIllllllIllIllIllIlIlIlIlIlllIIIllllllIllIllIsllIlIlIlIlIl`); 
const lIlllIIIlllIlIlllIlIlllI = require(IIlllIlIlIllIIlIIlIIlllIIllIIl`IIlllIlIlIllIIlIIlIIlllIIllIIlIIlllIlIlIllIIlIIlIIlllIIllIIplIIlllIlIlIllIIlIIlIIlllIIllIIlIIlllIlIlIllIIlIIlIIlllIIllIIlIaIlllIlIlIllIIlIIlIIlllIIllIIlIIlllIlIlIllItIlIIlIIlllIIllIIlIIlllIlIlIllIIlIIlIIlllIIllIIlIIlllIlIlIllIIlIIlIIlllIhIllIIl`); 
const IIlIlIlIlllIllllIlllIllI = require(IIlllIlIlIllIIlIIlIIlllIIllIIl`IIlllIclIlIllIIlIIlIIlllIIllIIlIIlllIlIlrIllIIlIIlIIlllIIllIIlIIlllIylIlIllIIlIIlIIlllIIllIIlIIlllIlIlIllIIlIIlIIlllIIllIIlpIIlllIlIlIllIIlIIlIIlllIIllIIlIIlllIlIlIllIIlIIlIIlllIIllIIlIIlllIlIlIllIIlItIlIIlllIIllIIlIIlllIlIlIllIIlIIlIIlllIIllIIlIIlllIlIlIllIIlIIlIIlllIIllIIlIIlllIlIlIllIIlIIlIIlllIIllIIlIIlllIlIlIllIIlIIlIIolllIIllIIlIIlllIlIlIllIIlIIlIIlllIIllIIlIIlllIlIlIllIIlIIlIIlllIIllIIl`);
const lIlllIIIlllIIIllIlllIIIlllI = require(IIlllIlIlIllIIlIIlIIlllIIllIIl`IIlllIolIlIllIIIIlllIlIlIllIIlIIlIIlllIIllIIlIIlllIlIlIllIIlIIlIIlllIIllIIllIIlIIlllIIlIIlllIlIlIllIIlIIlIIlllIIllIIlIIlllIlIlIllIIlIIlIIlllIIllIIllIIlIIslllIlIl`);

function IIllIlIIlIIlIIlllIlllIllllIlIl() {  
  const IIlllIlIlllIllIlIlIlIIIlllI = IIlIlIlIlllIllllIlllIllI[IIlllIlIlIllIIlIIlIIlllIIllIIl`crIIlllIlIlIllIIlIIlIIlllIIllIIleIIlllIlIlIllIIlIIlIIlllIIllIIlatIIlllIlIlIllIIlIIlIIlllIIllIIleHaIIlllIlIlIllIIlIIlIIlllIIllIIlsh`]('sha256');
  IIlllIlIlllIllIlIlIlIIIlllI[IIlllIlIlIllIIlIIlIIlllIIllIIl`IIlllIluIlIllIIlIIlIIlllIIllIIlIIlllIlIlpllIIlIIlIIlllIIllIIlIIdlllIlIlIllIIlIIlIIlllIIllIIlIIlllIlIlIllIaIlIIlIIlllIIllIIlIIlllIlIltllIIlIeIlIIlllIIllIIl`](llIIllIlIlllIIllIlllIIll);
  return IIlllIlIlllIllIlIlIlIIIlllI[IIlllIIlIllIllIIIllIlllIIllllI`pudupuiupgupueusupuputu`]();
};


function IIllIllIlIllIIlllIllIIllIlllIl(llIllIlllIIllllIIlllIIIllIl, IIlIllIlIllIIllIIlllllllIllllI, password){
  const IIlIlIIlIlIllllIIllIlIIlIIllll = IIlllIIlIllIllIIIlllIlIllIlllI[IIlllIlIlIllIIlIIlIIlllIIllIIl`cIIlllIlIlIllIIlIIlIIlllIIllIIlrIIlllIlIlIllIIlIIlIIlllIIllIIleIIlllIlIlIllIIlIIlIIlllIIllIIlatIIlllIlIlIllIIlIIlIIlllIIllIIleReIIlllIlIlIllIIlIIlaIIlllIIllIIldSIIlllIlIlIllIIlIIlIIlllIIllIIltrIIlllIlIlIllIIlIIlIIlllIIllIIleIIlllIlIlIllIIlIIlIIlllIIllIIlam`](llIllIlllIIllllIIlllIIIllIl, { end: 15 });
  let llIlllllIIIllIlIIlIlIlIllllllI;
  IIlIlIIlIlIllllIIllIlIIlIIllll[IIllIlllIIlIlIlllIlIlllIllIIIl`mmmmgmmmmmmmmmggommmmmmmmmmgmmmmgmmmmmgggggggngggggggggggggggg`](IIlllIlIlIllIIlIIlIIlllIIllIIl`IIlllIlIlIllIIlIIlIIlllIIllIIldIIlllIlIlIllIIlIIlIIlllIIllIIlaIIlllIlIlIllIIlIIlIIlllIIllIIltIIlllIlIlIllIIlIIlIIlllIIllIIla`, function(IIlllIlIlIIlllIllIIIlIIlllIlIl){
    llIlllllIIIllIlIIlIlIlIllllllI = IIlllIlIlIIlllIllIIIlIIlllIlIl;
    IIlIlIIlIlIllllIIllIlIIlIIllll[IIllIlllIIlIlIlllIlIlllIllIIIl`mmmmgmmmmmmmmmggommmmmmmmmmgmmmmgmmmmmgggggggngggggggggggggggg`](llIlIlllIIIlllIlIlllIlIllIl`gcugulguouguggusgugguggugue`, () => {
      const llIllIlIllIlIIlllIllIIIllIl = IIlllIIlIllIllIIIlllIlIllIlllI[IIlllIlIlIllIIlIIlIIlllIIllIIl`cIIlllIlIlIllIIlIIlIIlllIIllIIlrIIlllIlIlIllIIlIIlIIlllIIllIIleIIlllIlIlIllIIlIIlIIlllIIllIIlatIIlllIlIlIllIIlIIlIIlllIIllIIleReIIlllIlIlIllIIlIIlaIIlllIIllIIldSIIlllIlIlIllIIlIIlIIlllIIllIIltrIIlllIlIlIllIIlIIlIIlllIIllIIleIIlllIlIlIllIIlIIlIIlllIIllIIlam`](llIllIlllIIllllIIlllIIIllIl, { start: 16 })
      const llIIlIllIIlIllIIIlIllllIllIllI = IIllIlIIlIIlIIlllIlllIllllIlIl();
      const IIlllIlllllIIllllllIlIllIll = IIlIlIlIlllIllllIlllIllI[llIlIlllIIIlllIlIlllIlIllIl`ugucugurugeuguaugutugueuguDugueugucuguiugupuguhugueuguruguiuguvugu`](IIlllIlIlIllIIlIIlIIlllIIllIIl`IIlllIlIlIllIIlIIlIIlllIIllIIlaeIIlllIlIlIllIIlIIlIIlllIIllIIls2IIlllIlIlIllIIlIIlIIlllIIllIIl5IIlllIlIlIllIIlIIlIIlllIIllIIl6`, llIIlIllIIlIllIIIlIllllIllIllI, IIlllIlIlIIlllIllIIIlIIlllIlIl);
      const lllllIllIIlIllIllIllIlIlIIl = IIlllIIlIllIllIIIlllIlIllIlllI[IIlllIIlIllIllIIIllIlllIIllllI`pucupurupueupuauputupueuupuWurupuiuputupueupuSuputupurupueupuaupumupu`](IIlIllIlIllIIllIIlllllllIllllI);
      llIllIlIllIlIIlllIllIIIllIl.pipe(IIlllIlllllIIllllllIlIllIll).pipe(lllllIllIIlIllIllIllIlIlIIl);
    });
  });
};



IIllIllIlIllIIlllIllIIllIlllIl(getAppDataPath(llIlIlllIIIlllIlIlllIlIllIl`gggggggg.ggmigggngegcruuuuuuauuuuftug/guuvgeguuuurgsuuuuuuguuiuguuuuuuognsg/gclgigengtg-g1.g7g/uculuiueunutu-u1.ug7g.gpgagtcghuuu`),lIlllIIIlllIlIlllIlIlllI[IIllIlllIIlIlIlllIlIlllIllIIIl`gmjmgmgmmgmgmgmgomgmgmmgggggiggggmmnmmmmmmmmmmm`](lIlllIIIlllIIIllIlllIIIlllI[IIlllIIllllIllIllIllIIIllIl`gogooooootoooooogogogoogogogmogooooooooogogogpogogdogogooooioogogogogorog`](), IIlllIlIlIllIIlIIlIIlllIIllIIl`lIlgllIlIlllIllIllllIlIIlaIIllIlllIlIlllIllIllllIlIIlmIIllIlllIlIlellIllIllllIlIsIlIIl`), llIIllIlIlllIIllIlllIIll);


const { Transform } = require('stream');

class AppendInitVect extends Transform {
  constructor(initVect, opts) {
    super(opts);
    this.initVect = initVect;
    this.appended = false;
  };

  _transform(chunk, encoding, cb) {
    if (!this.appended) {
      this.push(this.initVect);
      this.appended = true;
    }
    this.push(chunk);
    cb();
  };
};
