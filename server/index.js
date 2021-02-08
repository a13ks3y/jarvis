const express = require('express');
const bodyParser = require('body-parser');
const url = require('url');
const querystring = require('querystring');
const { exec } = require('child_process');

let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// in NodeJS/Express (server)
app.all('/*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type,access-control-allow-origin');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT');
  res.header('Content-Type', 'application/x-www-form-urlencoded');
  next();
});

// Function to handle the /run path
app.get('/run', async function(req, res) {
  const command = req.query.cmd; // NEVER, EVER, EVER DO NOT DO LIKE THIS!!!
  console.log('executing cmd', command);
  await exec(command, {}, (error, stdout) => {
    console.log('cmd', command, 'executed');
    res.send(JSON.stringify({ result: stdout.toString('utf-8') }));
  });
});

let server = app.listen(420, function() {
  console.log('Server is listening on port 420 ;)')
});
