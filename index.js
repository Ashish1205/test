const Hapi = require('@hapi/hapi');
const plugins = require('./plugins');
const db = require('./Database');
const init = async () => {

  const server = Hapi.server({
      port: 4000,
      host: 'localhost'
  });

  
  await server.register(plugins);
  await server.start();
  console.log('Server running on port 4000');
};

init();


