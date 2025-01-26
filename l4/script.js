// Introduction to Express.js
// It is a framework
// Manage everything from recieving the request and giving the response

const express=require('express')
const app=express()

// app.get('route',requesthandler)

app.get('/',function(req,res){
    res.send("hello next");
})
app.get('/next',function(req,res){
    res.send("world sd");
})
app.listen(3050)