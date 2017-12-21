import React, { Component } from 'react';
import App from './app/app';

class Apps extends Component {
    
    render() {
        console.log(this.props);
        const testValue = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1]; //pull apps from server
        const output = testValue.map(value => {
            return (
                <div className="column is-3">
                    <App onClick={this.props.click}/>
                </div>
            )
        });
        return (
            <div className="columns is-multiline">
                {output}
                <div className="column is-3">
                    <h1 className="has-text-danger title">Add more</h1>
                </div>
            </div>
        );
    }
}

export default Apps;