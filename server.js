const Hapi = require('hapi');
const Blipp = require('blipp');
const config = require('config');

const routes = require('./routes');
const server = new Hapi.Server();

server.connection({ port: 9100 });

server.register([
  { register: Blipp, showAuth: true }
], (err) => {
  if (err) {
    throw err;
  }

  server.route(routes);
  server.start(() => {});
});