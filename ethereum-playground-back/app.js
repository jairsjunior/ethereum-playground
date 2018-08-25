const mqttServer = require('./broker/server');
const mqttClient = require('./broker/client');

mqttServer.on('ready', function setup() {
  console.log('Mosca server is up and running');
  setTimeout(function() {
    mqttClient.connectMqttClient();
  }, 4000);
});	