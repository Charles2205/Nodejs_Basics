// Creating a server with NodeJS

// requesting or importing http module
const http = require('http');

// importing file module 
const fileSystem = require('fs');

// importing URL module
const url = require('url');

// setting up a port number for the server
const PORT = 1122

// creating the server

const server=http.createServer((req,res)=>{
    // setHeader to set the content-type header
    res.setHeader('Content-Type', 'text/html')
    console.log(req.method);
    const resUrl = url.parse(req.url).pathname;

    // reading the file or data from the index html file
    let data=''

    // a condition to check the pages/route in the webServer
    if (resUrl === '/'){
         data=fileSystem.readFileSync(__dirname+'/index.html',(encoding="utf8"))
    }else if(resUrl ==="/contact"){
         data=fileSystem.readFileSync(__dirname+'/contact.html',(encoding="utf8"))
    }else if(resUrl ==="/about"){
        data=fileSystem.readFileSync(__dirname+'/about.html',(encoding="utf8")) 
    }
    // console.log(resUrl);
    
    // sending the data to the server
    res.write(data)

    // end server
    res.end();
    
})

// calling the server
server.listen(PORT,()=>{
    console.log(`Server listening on port: http://127.0.0.1:${PORT}`);
});
