var http = require('http');
var url=require("url");  
var fs=require("fs");
var server = http.createServer(function(request, response) {
    var path = url.parse(request.url).pathname;
    switch (path) {
        case '/index.html':
            fs.readFile(__dirname + path, function(error, data) {
                if (error) {
                    response.writeHead(404);
                    response.write(error);
                    response.end();
                } else {
                    response.writeHead(200, {
                        'Content-Type': 'text/html'
                    });
                    response.write(data);
                    response.end();
                }
            });
            break;
        default:
            fs.readFile(__dirname + path, function(error, data) {
                if (error) {
                    response.writeHead(404);
                    response.write(error);
                    response.end();
                } else {
                    response.writeHead(200, {
                        'Content-Type': 'text/html'
                    });
                    response.write(data);
                    response.end();
                }
            });
    }


})

const hostname = '127.0.0.1';
const port = 8000;


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});