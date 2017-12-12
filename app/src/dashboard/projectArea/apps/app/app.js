import React from 'react';

const App = () => {
    return (
        <div className="card">
            <div className="card-image">
                <figure class="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-4">John Smith</p>
                        <p class="subtitle is-6">@johnsmith</p>
                    </div>
                </div>
                <div class="content">
                    <h1>Test</h1>
                </div>
            </div>
        </div>
    );
};

export default App;