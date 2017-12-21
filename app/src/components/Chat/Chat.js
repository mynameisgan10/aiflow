import React from 'react';
import Aux from '../../HOC/aux/aux';

const componentName = (props) => {
    let align = 0;
    const chat = props.chats.map((chat, index) => {
        let classes;
        if (index % 2 == 0) {
            classes = ['text-bubble-container', 'text-bubble-container-left']
        }else{
            classes = ['text-bubble-container', 'text-bubble-container-right']
        }
        return (
            <div className={classes.join(' ')}>
                <div className="talk-bubble">
                    <div className="talk-bubble-content align-text-left">
                        <p>{chat}</p>
                    </div>
                </div>
            </div>

        )
    })
    return (
        <Aux>
            <div className="ChatArea">
                {chat}
                <div className="text-bubble-container text-bubble-container-left">
                    <div className="talk-bubble">
                        <div className="talk-bubble-content align-text-left">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eaque perspiciatis magni obcaecati incidunt reiciendis culpa placeat deserunt, accusantium natus quam aut doloremque, quod maiores molestiae! Ipsum provident fugiat quisquam.</p>
                        </div>
                    </div>
                </div>
                <div className="text-bubble-container text-bubble-container-right">
                    <div className="talk-bubble">
                        <div className="talk-bubble-content align-text-right">
                            <p>test jksadfj kl</p>
                        </div>
                    </div>
                </div>
                <div className="text-bubble-container text-bubble-container-left">
                    <div className="talk-bubble">
                        <div className="talk-bubble-content align-text-left">
                            <p>test jksadfj kl</p>
                        </div>
                    </div>
                </div>
                <div className="text-bubble-container text-bubble-container-left">
                    <div className="talk-bubble">
                        <div className="talk-bubble-content align-text-left">
                            <p>second Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quod non. Ipsa ipsum recusandae id maxime vitae non, eaque quasi delectus aspernatur incidunt eius sequi laborum sed in dolore neque.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="field is-grouped">
                    <p className="control is-expanded">
                        <textarea class="textarea is-info" placeholder="e.g. Hello world" rows="1"></textarea>
                    </p>
                    <p className="control">
                        <a className="button is-info is-medium">
                            Send
                        </a>
                    </p>
                </div>
            </div>
        </Aux>
    );
};

export default componentName;