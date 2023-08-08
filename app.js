// Creating a server with NodeJS
const http = require('http');

// setting up a port number for the server
const PORT = 1122

// creating the server
const server=http.createServer((req,res)=>{
console.log(req);
})

// calling the server
server.listen(PORT,()=>{
    console.log(`Server listening on port: ${PORT}`);
});