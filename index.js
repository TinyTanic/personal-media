'use strict';

const Hapi = require('hapi');


// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
   host: 'localhost',
   port: 8000
});

// Add the route
server.register(require('inert'), (err) => {
   if (err) {
      throw err;
   }
   server.route({
      method: 'GET',
      path: '/film',
      handler: function(request, reply) {
         reply.file('./public/film.html');
      }
   });
   server.route({
      method: 'GET',
      path: '/js/{param*}',
      handler: function(request, reply) {
         reply.file(`./public/js/${request.params.param}`);
      }
   });
});
server.route({
   method: 'GET',
   path: '/',
   handler: function(request, reply) {
      console.log('ciao')
      reply('hello world')
   }
});

// Start the server
server.start((err) => {

   if (err) {
      throw err;
   }
   console.log('Server running at:', server.info.uri);

});
