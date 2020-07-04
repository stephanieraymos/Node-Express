const express = require('express');
//Since express was installed into node modules; we don't have to give it a filepath. It will automatically look in node-modules
const bodyParser = require('body-parser');

const morgan = require('morgan');

const hostname = 'localhost';
const port = 3000;

const app = express();
//returns an express server application. This will now be available under this variable name (app)
app.use(morgan('dev'));
app.use(bodyParser.json());

app.all('/campsites', (req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
});

app.get('/campsites', (req, res) => {
  res.end('Will send all the campsites to you');
});

app.post('/campsites', (req, res) => {
  res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
});

app.put('/campsites', (req, res) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /campsites');
});

app.delete('/campsites', (req, res) => {
  res.end('Deleting all campsites');
});

app.get('/campsites/:campsiteId', (req, res) => {
  res.end(`Will send details of the campsite: ${req.params.campsiteId} to you`);
});

app.post('/campsites/:campsiteId', (req, res) => {
  res.statusCode = 403;
  res.end(`POST operation not supported on /campsites/${req.params.campsiteId}`);
});

app.put('/campsites/:campsiteId', (req, res) => {
  res.write(`Updating the campsite: ${req.params.campsiteId}\n`);
  res.end(`Will update the campsite: ${req.body.name}
      with description: ${req.body.description}`);
});

app.delete('/campsites/:campsiteId', (req, res) => {
  res.end(`Deleting campsite: ${req.params.campsiteId}`);
});

//__dirname refers to absolute path of current directory of the file that it's in
app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});