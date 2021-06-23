const http =require('http');

const hostname="0.0.0.0";
const port= 3000;

const server =http.createServer((req,res))=>{
  res.statusCode =200;
  res.setHeader('content-Type', 'text/plain');
  res.end('Zeet Test');
});

server.listen(port,hostname,() =>{
  console.log('server is running at http://${hostname}:${port}');
})
