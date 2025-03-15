const cookieParser=require('cookie-parser') 
const  express=require('express')
const app=express()
const path=require('path')
const usermodel=require('./models/user')


const bcrypt=require('bcrypt') 
const jwt=require('jsonwebtoken')

app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))
app.use(express.json())
app.use(cookieParser())

app.get('/',(req,res)=>{
    res.render('index')
})

app.post('/create',(req,res)=>{
    let {username,email,password,age}=req.body;
    bcrypt.hash(password,10,async(err,hash)=>{
        if(err){
            console.log(err)
        }
        let Createduser=await usermodel.create({
            username,
            email,
            password:hash,
            age
        })
        let token=jwt.sign({email},'shh');
        res.cookie("token",token)
        console.log(Createduser)
        res.send(Createduser)
    });
})

app.get("/logout",(req,res)=>{
    res.cookie('token',"")
    res.redirect('/')
})

app.get('/login',async(req,res)=>{
    res.render('login')
    
})

app.post('/login',async(req,res)=>{
    let user=await usermodel.findOne({email:req.body.email})
    console.log(user)
    if(!user){
        res.send("user not found")
    }
    bcrypt.compare(req.body.password,user.password,(err,result)=>{
        if(err){
            res.send(err)
        }
        console.log(result)
        if(result) {
            let token=jwt.sign({email:user.email},'shh');
             res.cookie("token",token)
            res.send("Your are a valid user")
        }
        else res.send("Invalid user")
    })
})


app.listen(3000);