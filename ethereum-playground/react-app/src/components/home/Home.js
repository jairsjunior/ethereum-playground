import React, {Component} from 'react'
import { Grid, Row, Col} from 'react-flexbox-grid';
import { attachModelToView, globalState } from 'rhelena';
import Stepper from '../step/Stepper';
import TerminalWindow from '../terminal/TerminalWindow';
import HomeModel from './HomeModel'

export default class Home extends Component {

    componentWillMount(){
        if(!globalState['home']){
            globalState['home'] = new HomeModel(this.props);
        }
        attachModelToView(globalState['home'], this);
    }

    render(){
        return (
            <Grid fluid>
                <Row>
                    <Col xs={12} md={6}>
                        <TerminalWindow /> 
                    </Col>
                    <Col xs={12} md={6}>
                        <Stepper steps={this.state.steps} />
                    </Col>
                </Row>
            </Grid>
        )
    }
}