const  express=require('express')
const app=express()

const cookieParser=require('cookie-parser') // use to read cookies save info in browser
const bcrypt=require('bcrypt') // use to hash password before saving in db for encryption and decryption of password
const jwt=require('jsonwebtoken') // use to generate token for user authentication

app.use(cookieParser()) // to use cookie parser

// app.get('/',(req,res)=>{
//     res.cookie('name','Ishu') // to set cookie
//     res.send('cookie set'); // to display cookie set
// })
// app.get('/get',(req,res)=>{
//     res.send(req.cookies.name); // to display cookie content
// })


// app.get('/get',(req,res)=>{
//         // 10 is the number of rounds to generate the salt
//         bcrypt.hash("jksa1122", 10, function(err, hash) {
//             console.log(hash);
//         });
// })
// app.get('/compare',(req,res)=>{
//     bcrypt.compare("jksa1122", "$2b$10$LFSaImsdt4qhuWLIvn1A3.F8AHvJEvXmtvaEmqiv3qco2rSU.riIW", function(err, result) {
//         console.log(result);
//     });
// })

app.get('/',(req,res)=>{
    let token= jwt.sign({email : 'ishu@gmail.com'},'secret')
    res.cookie('token',token)
    res.send("done")
})
app.get('/read',(req,res)=>{
    console.log(req.cookies)
    let data=jwt.verify(req.cookies.token,"secret")
    res.send(data)
})    


app.listen(3000);