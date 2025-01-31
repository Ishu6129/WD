const path = require('path')
const express = require('express')
const app=express()
const fs=require('fs')

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.set('view engine','ejs')

app.get('/',function(req,res){
    fs.readdir(`./files`,(err,files)=>{
        res.render("index",{files:files});
    })
    
})

app.post('/create',function(req,res){
    fs.writeFile(`./files/${req.body.title.split(" ").join("")}.txt`,req.body.details,function(err){
        res.redirect('/');
    });
})

app.get('/file/:filename',function(req,res){
    fs.readFile(`./files/${req.params.filename}`,"utf-8",function(err,filedata){
        res.render("show",{filename:req.params.filename,filedata:filedata});
    });
})
app.get('/delete/:filename', function(req, res) {
    const filePath = `./files/${req.params.filename}`;
    fs.unlink(filePath, function(err){
      if (err) {
        res.status(500).send('Failed to delete the file');
      } else {
        res.redirect('/');
      }
    });
});

app.get('/edit/:filename',function(req,res){
    res.render('edit',{filename:req.params.filename});
})

app.post('/edit',function(req,res){
  fs.rename(`./files/${req.body.previous}.txt`,`./files/${req.body.new}.txt`,(err)=>{
    res.redirect('/')
  })
})  

app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });