import { RhelenaPresentationModel, globalState } from 'rhelena';
import manuh from 'manuh';
import { ManuhBridge } from 'manuh-bridge-mqtt';

export default class TerminalWindowModel extends RhelenaPresentationModel {
    constructor(props){
        super(props);
        this.welcomeMessage = 'Ethereum Playground - \\_0_/';
        this.commands = {
            showmsg: this.showMsg,
            popup: () => alert('Terminal in React')
        };
        this.mqttClientId = "ethereum-" + Math.random().toString(16).substr(2, 8);

        let mqttConfig = {
            protocol: process.env.MQTT_PROTOCOL || 'ws',
            host: process.env.MQTT_HOST || 'localhost',
            port: process.env.MQTT_PORT || 3010,
            context: process.env.MQTT_CONTEXT | ''
        }
        
        this.print = null;
        this.manuhBridge = new ManuhBridge(manuh, mqttConfig);
        this.manuhBridge.subscribeRemote2LocalTopics([ `ethereum/remote/${this.mqttClientId}/result` ]);
        this.manuhBridge.subscribeLocal2RemoteTopics([ 'ethereum/remote/command/set' ]);

        manuh.subscribe(`ethereum/remote/${this.mqttClientId}/result`, 'TreeViewerModel', (msg, info) => {
            let resultOfCommand;
            if(msg != undefined && msg != null){
                msg = JSON.parse(msg);
                resultOfCommand = msg.result;
                this.print(JSON.stringify(resultOfCommand));
            }
        });
    }

    commandPassThrough = (cmd, print) => {
        if(!this.print){
            this.print = print;
        }
        this.executedCommand = false;
        manuh.publish('ethereum/remote/command/set', JSON.stringify({ topicToRespond: `ethereum/remote/${this.mqttClientId}/result`, cmd: cmd.join(' ') }));
    }

    sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    runEval = async (cmd) =>{
        try{
            let result = await eval(cmd.join(' '));
            console.log(result);
        }catch(e){
            console.log('ERROR --> ', e);
        }
    }

}