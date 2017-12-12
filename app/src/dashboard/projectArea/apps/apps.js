import React, { Component } from 'react';
import App from './app/app';

class Apps extends Component {

    render() {
        const testValue = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
        const output = testValue.map(value => {
            return (
                <div className="column is-2">
                    <App />
                </div>
            )
        });
        return (
            <div className="columns is-multiline">
                {output}
                <div className="column is-2">
                    <h1 className="has-text-danger title">Add more</h1>
                </div>
            </div>
        );
    }
}

export default Apps;