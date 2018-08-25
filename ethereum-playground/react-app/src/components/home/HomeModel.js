import React, { Component } from 'react'; 
import { RhelenaPresentationModel, globalState } from 'rhelena';
import content from './content.json';
import Step from '../step/Step';

export default class TerminalWindowModel extends RhelenaPresentationModel {
    constructor(props){
        super(props);

        this.steps = [];
        for(let index in content){
            this.steps.push({ name: content[index].name, component: <Step content={content[index].content}/>})
        }
    }
}