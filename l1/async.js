// jo bhi code async nature ka ho use side stack me bhej or to sync nature ka ho use 
// chalao, jab bhi sara sync code chul jaye tab check kero async code complete hua h 
// ya nahi, ager vo complete nahi hua to use main stack me lao or chala do

async function abcd(){
    var blob=await fetch("https://randomuser.me/api")
    var res=await blob.json()
    console.log("Gender : "+res['results'][0]['gender'])
    console.log("Name : "+ res['results'][0]['name']['title']+". "+res['results'][0]['name']['first']+" "+res['results'][0]['name']['last'])
    console.log("Age :"+res['results'][0]['dob']['age'])
}
abcd()