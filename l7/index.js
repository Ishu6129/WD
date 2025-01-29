const path = require('path')
const express = require('express')
const app=express()
const fs=require('fs')


app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')))
app.set('view engine','ejs')

app.get('/',function(req,res){
    fs.readdir(`./files`,(err,files)=>{
        res.render("index",{files:files});
    })
    
})
app.post('/create',function(req,res){
    console.log(req.body);
})
app.listen(3000)