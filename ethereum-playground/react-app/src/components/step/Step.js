import React, { Component} from 'react'
import ReactMarkdown from 'react-markdown'


export default class Step extends Component {

    componentWillMount(){
    }

    render() {
        return (
            <div className="result-pane" style={{ 
                fontSize: '0.8em', 
                textAlign: 'left',
                maxHeight: '80vh', 
                overflowY: 'auto' }}>
                <ReactMarkdown 
                    className="result"
                    source={this.props.content} 
                />
            </div>
        )
    }
}