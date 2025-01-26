const fs=require('fs');

//fs.writeFile('file name','data'(optional),callbaack())

// writeFile(),appendFile(),rename(),copyFile()
// unlink(path,function) - to delete a file
// rmdir(folerPath,[options],function)-work when directory is empty
// rm - to remove data containing directory 
// mkdir('namedirectory',{ recursive: true },function)
// readfile(filepaath,{option},function-err,data)

/*
fs.writeFile('hey.txt','hello baccha log\n+',err=>{
    if(err){
        console.log("error occured");
    }
    else{
        console.log("done");
    }
})
*/

/*
fs.rename('hey.txt','hello.txt',err=>{
    if(err){
        console.log("error occured");
    }
    else{
        console.log("done");
    }
})
*/

/*
fs.copyFile('hello.txt','./copy/hello.txt',err=>{
    if(err){
        console.log("error occured");
    }
    else{
        console.log("done");
    }
})//error occur hoga as there is no folder named copy
*/

/*
fs.unlink('hello.txt',err=>{
    if(err){
        console.log("error occured");
    }
    else{
        console.log("done");
    }
})
*/

/*
fs.rmdir('./asd',err=>{
    if(err){
        console.log("error occured");
    }
    else{
        console.log("done");
    }
})
*/

/*
fs.rm('./asd',{recursive:true},err=>{
    if(err){
        console.log("error occured");
    }
    else{
        console.log("done");
    }
})
*/

/*
fs.mkdir('./tmpw', (err) => {
    if (err) throw err;
  }); 
*/

/*
fs.readFile('./as.txt', "utf8",(err, data) => {
    if (err) throw err;
    console.log(data);
  }); 
*/

