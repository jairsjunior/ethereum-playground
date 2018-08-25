import React, { Component } from 'react'; 
import Terminal from 'terminal-in-react';
import { attachModelToView, globalState } from 'rhelena';
import TerminalWindowModel from './TerminalWindowModel';
import styles from './TerminalWindow.css'

export default class TerminalWindow extends Component {

    componentWillMount(){
        if(!globalState['terminal']){
            globalState['terminal'] = new TerminalWindowModel(this.props);
        }
        attachModelToView(globalState['terminal'], this);
    }

    render(){
        return (
            <div style={{ height: '100vh'}}>
                <Terminal
                    color='green'
                    backgroundColor='black'
                    barColor='black'
                    style={{ fontWeight: "bold", fontSize: "0.75em" }}
                    allowTabs={false}
                    commands={this.state.commands}
                    descriptions={{}}
                    msg={this.state.welcomeMessage}
                    commandPassThrough={this.viewModel.commandPassThrough}
                />
            </div>
        )
    }
}