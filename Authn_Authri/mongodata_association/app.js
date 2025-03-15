const express=require('express');
const app=express();

const usermodel = require('./models/user');
const postmodel = require('./models/post');

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.get('/adduser',async (req,res)=>{
    let user= await usermodel.create({
        name:'John Doe',
        email:'ishu@gmail.com',
        age:25,
    });
    res.send(user);
})

app.get('/addpost',async (req,res)=>{
    let user= await usermodel.findOne({name:'John Doe'});
    let post= await postmodel.create({
        postdata:'This is my first post',
        user:user._id
    });
    user.posts.push(post._id);
    await user.save(); 
    res.send({post,user});
})

app.listen(3000)
