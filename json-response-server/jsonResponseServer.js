const http = require('http');

const jsonResponseServer = http.createServer((_, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'application/json');
  response.write(JSON.stringify({ data: 'Pesto Bootcamp!' }));
  response.end();
});

export {
  jsonResponseServer,
};
