/*
 *
 * Primary file for the API
 * 
 */

const http = require('http');
const url = require('url');
//Configure the server to respond to all calls with a string on Port 3000
let server = http.createServer(function(req, res) {
   //ignore favicon.
    if (req.url != '/favicon.ico') {

        //get the url
        let parsedURL = url.parse(req.url, true);

        //get the url path
        let path = parsedURL.pathname;
        let trimmedPath = path.replace(/^\/+|\/+$/g, '');

        //get the request method
        let method = req.method.toLowerCase();
        
        //send response header
        res.writeHead(200, {
            'Content-type': 'text/plain'
        });

        //send response text
        res.end('Hello World!\n');


        //log the request and method.
        console.log('Request recieved on path : ' + trimmedPath +
            '\nWith method : ' + method);
    }
});
server.listen(3000, function() {
    console.log("Server is running noe")
});
