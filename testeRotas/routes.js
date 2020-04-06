const app = require('./server');

app.get('/', (request, response) => {
  response.send('<h1>Welcome page</h1>');
});

module.exports = app;
