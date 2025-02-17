const express=require('express')
const app=express()

const userModule=require('./usermodel');

app.get('/',(req,res)=>{
    res.send("Hi")
})

app.get('/create',async (req,res)=>{
    let createuser = await userModule.create({
        name:"ishu",
        email:"ishu@123@gmail.com"
    })
    res.send(createuser)
})

app.get('/update',async (req,res)=>{
    let updateduser=await userModule.findOneAndUpdate({name:"ishu"},{name:"ishuag"},{new:true})
    res.send(updateduser)
})

app.get('/read',async (req,res)=>{
    let readFromUser=await userModule.find()
    res.send(readFromUser)
})

app.get('/delete',async (req,res)=>{
    let deleteduser=await userModule.findOneAndDelete({name:"ishu"})
    res.send(deleteduser)
})

app.listen(3000);   