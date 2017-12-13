const PORT = 9685;
const fs = require('fs');
const http = require('http');

const server = http
  .createServer((_req, _res) => {
    console.log('- GET Request received')
    _res.writeHead(200, {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'X-Powered-By': 'FurqanAziz'
    });

    let contents = fs.readFileSync('./question-1.json', 'utf-8');
    console.log('- GET Response serving')
    return _res.end(contents);
  })
  .listen(PORT, (err) => {
    if (err) {
      return console.log('Something bad happened', err)
    }

    console.log(`Server is listening at http://localhost:${PORT}`);
  });