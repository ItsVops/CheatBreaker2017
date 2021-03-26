

async function checkIfBanned(...args) {
//    const uuidrequest = await fetch('https://api.mojang.com/users/profiles/minecraft/' + Username);
//    const uuidjson = await uuidrequest.json();
//    const uuid = uuidjson.id;
//    const bannedPeople = await fetch('https://oldcheatbreaker.com/cheating_bans_temp.txt');
//    const banned = await bannedPeople.text();
//  
//    const regex = /\(.*/g;
//    let result = false;
//    banned.split('\n').every(v =>{
//      if(v.includes(uuid)){
//        result = true;
//      }
//    })
//  
//    if(result == true) {
//      bannedUser();
//      return true;
//    }

    checkClientUpdates(args);
    return false;
    
}