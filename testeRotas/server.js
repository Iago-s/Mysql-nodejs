const express = require('express');
const server = express();

server.listen(3000, () => {
  console.log('Server started.');
});

module.exports = server;