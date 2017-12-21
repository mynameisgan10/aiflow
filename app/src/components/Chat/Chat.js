import React from 'react';
import Aux from '../../HOC/aux/aux';

let currentQuestion = 0;
const Chat = (props) => {
    let questionArray = [];
    for (let index = 0; index < props.questions.length; index++) {
        if (index === 0 && props.questions[index].response === null) {
            questionArray.push(props.questions[0]);
            break;
        }
        if (index == 0 || props.questions[index - 1].response !== null) {
            questionArray.push(props.questions[index]);
            currentQuestion = index;
        }
    }

    const chat = questionArray.map((chat, index) => {
        return (
            <Aux>
                <div key={chat.id} className='text-bubble-container text-bubble-container-left'>
                    <div className="talk-bubble">
                        <div className="talk-bubble-content align-text-left">
                            <p>{chat.question}</p>
                        </div>
                    </div>
                </div>
                {chat.response ? (<div key={chat.id} className='text-bubble-container text-bubble-container-right'>
                    <div className="talk-bubble">
                        <div className="talk-bubble-content align-text-right">
                            <p>{chat.response}</p>
                        </div>
                    </div>
                </div>) : null}
            </Aux>
        )
    })
    return (
        <Aux>
            <div className="ChatArea">
                {chat}
            </div>
            <div className="section">
                <form onSubmit={(event) => props.submit(event,document.getElementById('input-area'), currentQuestion)}>
                    <div className="field is-grouped">
                        <p className="control is-expanded">
                            <input class="textarea is-info" id="input-area" placeholder="e.g. Hello world" rows="1"></input>
                        </p>
                        <p className="control">
                            <a className="button is-info is-medium" onClick={(event) => props.submit(event,document.getElementById('input-area'), currentQuestion)}>
                                Send
                        </a>
                        </p>
                    </div>
                </form>
            </div>
        </Aux>
    );
};

export default Chat;