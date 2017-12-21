import React, { Component } from 'react';
import Aux from "../../HOC/aux/aux";
import "./NewApp.css";
import Chat from '../../components/Chat/Chat';

class NewApp extends Component {

    state = {
        testValue: [5,5,5]
    }
    render() {
        return (
            <Aux>
                <Chat chats={this.state.testValue} />
            </Aux >

        );
    }
}

export default NewApp;