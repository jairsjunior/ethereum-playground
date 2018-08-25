import React, { Component} from 'react'
import StepZilla from 'react-stepzilla';
import './Stepper.css';
import prismjs from 'prismjs'
import prismStyle from 'prismjs/components/prism-jsx';
import prismTheme from '../../css/themes/prism-okaidia.css';

export default class Stepper extends Component {

    render() {
        return (
            <div className='step-progress' style={{ }}>
                <StepZilla
                    steps={this.props.steps} 
                    nextButtonText="Próximo"
                    backButtonText="Anterior"
                    nextButtonCls="btn pull-right"
                    backButtonCls="btn pull-left"
                />
            </div>)
    }
}