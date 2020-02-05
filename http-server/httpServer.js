const http = require('http');

const httpServer = http.createServer((_, response) => {
  response.statusCode = 200;
  response.write('Pesto Bootcamp!\n');
  response.end();
});


export {
  httpServer,
};
