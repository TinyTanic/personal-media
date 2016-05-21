'use strict'

const Hapi = require('hapi')


// Create a server with a host and port
const server = new Hapi.Server()
server.connection({
   host: 'localhost',
   port: 8000
})

const PUBLIC_URL = './public'

// Add the route
server.register(require('inert'), (err) => {
   if (err) {
      throw err
   }
   server.route({
      method: 'GET',
      path: '/',
      handler: function(request, reply) {
         reply.file(`${PUBLIC_URL}/index.html`)
      }
   })
   server.route({
      method: 'GET',
      path: '/film',
      handler: function(request, reply) {
         reply.file(`${PUBLIC_URL}/film.html`)
      }
   })
   server.route({
      method: 'GET',
      path: '/js/{param*}',
      handler: function(request, reply) {
         reply.file(`${PUBLIC_URL}/js/${request.params.param}`)
      }
   })
   server.route({
      method: 'GET',
      path: '/style/{param*}',
      handler: function(request, reply) {
         reply.file(`${PUBLIC_URL}/style/${request.params.param}`)
      }
   })
})

// Start the server
server.start((err) => {

   if (err) {
      throw err
   }
   console.log('Server running at:', server.info.uri)

})
