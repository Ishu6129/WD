//session cookie
const express =require('express')
const app=express();

//for reading json data
app.use(express.json());
//for reading urlencoded data
app.use(express.urlencoded({extended:true}));

app.use(function(req,res,next){
    console.log("chalana");
    next();
})

app.get('/',function(req,res){
    res.send("hello world")
})

app.listen(3000)