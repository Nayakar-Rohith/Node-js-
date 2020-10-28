const rect=require('./nodeMod/rectangle')
const http = require('http');
const fs = require('fs');
const path = require('path');
const express=require('express');

//...............start using node mod.................

function solveRect(l,b) {
    console.log("Solving for rectangle with l = " + l + " and b = " + b);

    if (l <= 0 || b <= 0) {
        console.log("Rectangle dimensions should be greater than zero:  l = "
               + l + ",  and b = " + b);
    }
    else {
	    console.log("The area of the rectangle is " + rect.area(l,b));
	    console.log("The perimeter of the rectangle is " + rect.perimeter(l,b));
    }
}
//...............end using node mod...................


const hostname = 'localhost';
const port = 3000;
 
//...............start using  http and path and fs...................
const server = http.createServer((req, res) => {
    console.log('Request for ' + req.url + ' by method ' + req.method);
  
    if (req.method == 'GET') {
      var fileUrl;
      if (req.url == '/') fileUrl = '/index.html';
      else fileUrl = req.url;
  
      var filePath = path.resolve('./public'+fileUrl);
      const fileExt = path.extname(filePath);
      if (fileExt == '.html') {
        fs.exists(filePath, (exists) => {
          if (!exists) {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end('<html><body><h1>Error 404: ' + fileUrl + 
                        ' not found</h1></body></html>');
            return;
          }
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/html');
          fs.createReadStream(filePath).pipe(res);
        });
      }
      else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('<html><body><h1>Error 404: ' + fileUrl + 
                ' not a HTML file</h1></body></html>');
      }
    }
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('<html><body><h1>Error 404: ' + req.method + 
                ' not supported</h1></body></html>');
    }
  })
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
//...............end using  http and path and fs...................

const app=express();
app.use((req,res,next)=>{
  res.statusCode=200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>This is an Express Server</h1></body></html>');
})

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


// solveRect(2,4);
// solveRect(0,5);
// solveRect(-3,5);