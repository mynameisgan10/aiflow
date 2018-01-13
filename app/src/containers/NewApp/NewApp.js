import React, { Component } from 'react';
import Aux from "../../HOC/aux/aux";
import "./NewApp.css";
import Chat from '../../components/Chat/Chat';
import AppEdit from '../../components/AppEdit/AppEdit';
import Rendering from '../../UI/rendering/Rendering';

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
        ],
        page: 1
    }
    userRespond = (event, response, index) => {
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
        response.value = '';
    }
    togglePage = (number) => {
        let currentPage = <AppEdit />;
        switch (number) {
            case 1:
                currentPage = <Chat questions={this.state.questions} submit={this.userRespond} />
                break;
            case 2:
                currentPage = <AppEdit completeSetup={this.completeSetup} />
                break;
            case 3:
                currentPage = <Rendering />
                break;
            default:
                currentPage = <Chat questions={this.state.questions} submit={this.userRespond} />
                break;
        }
        return currentPage;

    }
    completeSetup = () => {
        console.log("done!");
        this.setState({
            page: 3
        });
    }
    render() {
        let page = this.state.page;
        let currentPage = <Chat questions={this.state.questions} submit={this.userRespond} />
        this.state.questions.map((question) => {
            if (question.response === null) {
                page = 1; //use page 3 to get loading

            } else if (this.state.page === 3) {
                page = 3;
            }
            else {
                page = 2;
            }
        })
        currentPage = this.togglePage(page);
        return (
            <Aux>
                {currentPage}
            </Aux >

        );
    }
}

export default NewApp;

// need to reset state after revisit the page