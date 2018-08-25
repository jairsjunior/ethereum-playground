const mqtt = require('mqtt');
const Web3 = require('web3');

let mqttClient = undefined;

const runEval = async (cmd) => {
    try{
        return await global.eval(cmd);
    }catch(err){
        return err;
    }
}

const runCommand = (message) => {
    const json = JSON.parse(message);
    console.log(JSON.stringify(json));
    runEval(json.cmd).then((result) => {
        console.log('Result ===> ', JSON.stringify(result));
        mqttClient.publish(json.topicToRespond, JSON.stringify({ result: result }));
    });
}

module.exports = {
    connectMqttClient: () => {
        console.log('TRY to START mqtt client --------------------------------------------------------------');
        mqttClient = mqtt.connect(`${process.env.MQTT_PROTOCOL || "ws"}://${process.env.MQTT_ADDRESS || "localhost"}:${process.env.MQTT_PORT || "3010"}/${process.env.MQTT_CONTEXT || ""}`);
        
        //Starting MQTT CLIENT
        mqttClient.on('connect', function () {
            console.log('MQTT client is connected');
            mqttClient.subscribe('ethereum/remote/command/set');
        });
        mqttClient.on('message', function (topic, message) {
            switch(topic){
                case 'ethereum/remote/command/set': {
                    runCommand(message.toString());
                break;
                }
            }
        });

        //try connect to ETHEREUM NODE
        setTimeout(()=>{
            if(global.web3 == null){
                global.web3 = new Web3(new Web3.providers.HttpProvider(`http://${process.env.ETH_NODE || "localhost"}:8545`));
                while(!global.web3.isConnected()){
                    console.log('Try to connect to web3 again...')
                    global.web3 = new Web3(new Web3.providers.HttpProvider(`http://${process.env.ETH_NODE || "localhost"}:8545`));
                }
                global.eth = web3.eth;
                global.personal = web3.personal;
            }
        }, 2000)
      }
}