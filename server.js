const http = require('http');

http.createServer(function(req, res) {
    if (req.url === "/OK") {
        console.log("Inbound 'OK' request being processed...");
        res.writeHead(200);
        res.end();
    } else if (req.url === "/Bad-Request") {
        console.log("Bad Request");
        res.writeHead(400);
        res.end();
    } else if (req.url === "/Created") {
        console.log("Created");
        res.writeHead(201);
        res.end();
    } else if (req.url === "/Forbidden") {
        console.log("Forbidden");
        res.writeHead(403);
        res.end();
    } else if (req.url === "/Found") {
        console.log("Found");
        res.writeHead(302);
        res.end();
    } else if (req.url === "/Gateway-Timeout") {
        console.log("Gateway Timeout");
        res.writeHead(504);
        res.end();
    } else if(req.url === "/Internal-Server-Error") {
        console.log("Server Error")
        res.writeHead(500);
        res.end();
    } else if(req.url === "/Moved-Permanently"){
        console.log("Moved Permanently");
        res.writeHead(301);
        res.end();
    } else if(req.url === "/Unauthorized"){
        console.log("Unauthorized");
        res.writeHead(401);
        res.end();
    } else if(req.url === "/Bonus/Redirect"){
        console.log("Redirecting");
        res.writeHead(302, {"Location": "http://localhost:3000/Forbidden"});
        res.end();
    } else if(req.url === "/Bonus/Webpage") {
        console.log("Webpage");
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>Hello!</h1>");
        res.end();
    } else {
        console.log("404 Not Found");
        res.writeHead(404);
        res.end();
    }
}).listen(3000, function() {
    console.log("Listening for request on port 3000...");
});
