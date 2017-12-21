import React, { Component } from 'react';
import Aux from "../../HOC/aux/aux";
import "./NewApp.css";
import Chat from '../../components/Chat/Chat';

class NewApp extends Component {

    state = {
        questions: [
            {
                id: 1,
                question: "What is the purpose of your app",
                response: null
            },
            {
                id: 2,
                question: "Do you need a dedicated checkout addon",
                response: null
            },
            {
                id: 3,
                question: "Do you need a delivery service",
                response: null
            }
        ]
    }
    userRespond = (event,response, index) => {
        event.preventDefault();
        let updateState = { ...this.state };
        updateState = {
            questions: [...this.state.questions]
        };
        this.state.questions.map((question, index) => {
            updateState.questions[index] = {
                ...this.state.questions[index],
            }
        });
        updateState.questions[index].response = response.value;
        this.setState(updateState);
        console.log(this.state);
        response.value = '';
    }
    render() {
        return (
            <Aux>
                <Chat questions={this.state.questions} submit={this.userRespond} />
            </Aux >

        );
    }
}

export default NewApp;