import React, { Component } from 'react';
import App from './app/app';

class Apps extends Component {
    render() {
        return (
            <div className="columns is-multiline">
                <div className="column is-2">
                    <App />
                </div>
                <div className="column is-2">
                    <App />
                </div>
                <div className="column is-2">
                    <App />
                </div>
                <div className="column is-2">
                    <App />
                </div>
                <div className="column is-2">
                    <App />
                </div>
                <div className="column is-2">
                    <App />
                </div>
                <div className="column is-2">
                    <App />
                </div>
                <div className="column is-2">
                    <App />
                </div>
                <div className="column is-2">
                    <h1>Add more</h1>
                </div>
            </div>
        );
    }
}

export default Apps;