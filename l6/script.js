// setting up pparsers
// dynamic routing
// how to get data coming from frontend at backend routr
// setting of ejs for ejs pages
//setting up public static files
// public folder - static
// views - ejs
const path = require('path')
const express = require('express')
const app=express()


//parsers
app.use(express.json())
app.use(express.urlencoded({extended:true}));
// for public static files
app.use(express.static(path.join(__dirname,'public')))
// for html must be in views folder
app.set('view engine','ejs')


app.get("/",function(req,res){
    res.render("index")// index.ejs must be in views folder
})

//for dynamic url put "":"" in route
app.get("/profile/:username",function(req,res){
    // params will be an oject of key-value pairs
    var name=req.params.username // requesting username after profile/
    res.send("welcome "+name)// index.ejs must be in views folder
})


app.listen(3030,function(){
    console.log("Running....")
});