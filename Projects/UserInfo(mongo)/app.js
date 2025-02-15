const express=require('express')
const app=express()
const path=require('path')

const usermodel=require('./models/user')

app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))

const { name } = require('ejs')

app.get('/',(req,res)=>{
    res.render("index")
})


app.post('/create', async (req, res) => {
    let { name, email, image } = req.body;
    let data = await usermodel.create({ name, email, image });
    console.log(data);
    res.redirect('/read');
});

app.get('/read',async(req,res)=>{
    let users=await usermodel.find()
    res.render("read",{users})
})


app.get('/delete/:id',async(req,res)=>{
    let user_id=req.params.id
    await usermodel.findByIdAndDelete({_id:user_id})
    res.redirect('/read')

})

app.get('/edit/:id', async (req, res) => {
    let user = await usermodel.findById(req.params.id);
    res.render('edit', { user });
});

app.post('/update/:id', async (req, res) => {
    let { name, email, image } = req.body;
    await usermodel.findByIdAndUpdate(req.params.id, { name, email, image });
    res.redirect('/read');
});


app.listen(3000);