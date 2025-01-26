const http=require("http");

const server = http.createServer((req,res)=>{
    res.end("hello wold");
})
server.listen(3000);