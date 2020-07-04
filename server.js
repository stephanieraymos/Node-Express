const express = require('express');
//Since express was installed into node modules; we don't have to give it a filepath. It will automatically look in node-modules

const hostname = 'localhost';
const port = 3000;

const app = express();
//returns an express server application. This will now be available under this variable name (app)

app.use((req, res) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});