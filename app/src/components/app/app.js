import React from 'react';
import {Link} from 'react-router-dom';


const App = (props) => {
    return (
        <Link to="/appdetail">
            <div className="card" onClick={props.onClick}>
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={props.appImage} alt="Placeholder" />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48">
                                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder" />
                            </figure>
                        </div>
                        <div className="media-content">
                            <p className="title is-4">App name</p>
                            <p className="subtitle is-6">@creatorName</p>
                        </div>
                    </div>
                    <div className="content">
                        <h1>Test</h1>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default App;