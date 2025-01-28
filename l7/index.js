const path = require('path')
const express = require('express')
const app=express()

app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')))
app.set('view engine','ejs')

app.get("/",function(req,res){
    // res.send("welcome")
    res.render("index")
})
app.listen(3000)