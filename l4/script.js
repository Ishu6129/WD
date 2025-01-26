// Introduction to Express.js
// It is a framework
// Manage everything from recieving the request and giving the response

const express=require('express')
const app=express()

// app.get('route',requesthandler)

/*
app.get('/',function(req,res){
    res.send("hello next<br><a href='http://localhost:3050/next'>next</a>");
})
app.get('/next',function(req,res){
    res.send("world sd");
})
app.listen(3050)
*/

// Implementing middleware

/*
app.use(function(req,res,next){
    console.log("chalana");
    next();
});
app.use(function(req,res,next){
    console.log("chalana ek or baar");
    next();
});

app.get('/',function(req,res){
    res.send("hello next<br><a href='http://localhost:3050/next'>next</a>");
})
app.get('/next',function(req,res){
    res.send("world sd");
})
app.listen(3050);
*/

// Error Handling - always put in last

app.use(function(req,res,next){
    console.log("chalana");
    next();
});

app.get('/',function(req,res){
    res.send("hello next<br><a href='http://localhost:3050/next'>next</a>");
})
app.get('/next',function(req,res,next){
    return next(new Error("Something went wrong"))//console per dispaly hoga
})
// ErrorHandler - always in last
app.use(function(err,req,res,next){
    console.error(err.stack);
    res.status(500).send('something broke!');//front per display hoga
});

app.listen(3050);