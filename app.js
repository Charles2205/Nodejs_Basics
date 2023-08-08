// Creating a server with NodeJS
const http = require('http');

// setting up a port number for the server
const PORT = 1122

// creating the server
const server=http.createServer((req,res)=>{
res.write('<h1 style ="color:blue">Hello Server<h1>')
res.end();
})

// calling the server
server.listen(PORT,()=>{
    console.log(`Server listening on port: http://127.0.0.1:${PORT}`);
});