// Creating a server with NodeJS

// requesting or importing http module
const http = require('http');

// importing file module 
const fileSystem = require('fs');

// setting up a port number for the server
const PORT = 1122

// creating the server

const server=http.createServer((req,res)=>{
    console.log(req);
    // setHeader to set the content-type header
    res.setHeader('Content-Type', 'text/html')
    
    // reading the file or data from the index html file
    const data=fileSystem.readFileSync(__dirname+ '/index.html',(encoding="utf8"))

    // sending the data to the server
    res.write(data)

    // end server
    res.end();
})

// calling the server
server.listen(PORT,()=>{
    console.log(`Server listening on port: http://127.0.0.1:${PORT}`);
});
