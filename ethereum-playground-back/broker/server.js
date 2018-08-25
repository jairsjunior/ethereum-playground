const mosca = require('mosca');
const mqtt_server = {
    http: {
        port: 3010,
        bundle: true,
        static: './'
    }
}

module.exports = new mosca.Server(mqtt_server);