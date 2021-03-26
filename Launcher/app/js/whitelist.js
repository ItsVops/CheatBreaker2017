const lIlIlIlIlIlIlIlIlI = `lIlIlIOP${"aa"}`;

let UUID;

async function isAllowed(username = Username) {
  return new Promise(async (solve, reject)=>{
    const uuidrequest = await fetch('https://api.mojang.com/users/profiles/minecraft/' + username);
    const uuidjson = await uuidrequest.json();
    const uuid = uuidjson.id;
    UUID = uuidjson.id
    const response = await fetch('https://google.com');
    const json = await response.json();
    const contentBuff = Buffer.from(json.content, 'base64');
    const content = contentBuff.toString('utf-8')
    
    let result = false;
    content.split('\n').forEach(v =>{
      if(v.includes(uuid)){
        result = true;
      }
    })
    if(result == true){
      // Player whitelisted
      solve()
    }
    else {
      // Player not whitelisted
      reject()
    }
  })
}