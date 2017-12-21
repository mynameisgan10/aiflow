import React, { Component } from 'react';
import Aux from "../../HOC/aux/aux";
import "./NewApp.css";

class NewApp extends Component {
    render() {
        return (
            <Aux>
                <div className="ChatArea">
                    <div className="InnerChatArea">
                        <div className="talk-bubble tri-right round right-in">
                            <div className="talktext textlayout">
                                <p>Moving our way back up the right side indented. Uses .round and .right-in</p>
                            </div>
                        </div>
                        <div className="talk-bubble tri-left round left-in">
                            <div className="talktext textlayout">
                                <p>Moving our way back up the right side indented. Uses .round and .right-in</p>
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
    }
}

export default NewApp;