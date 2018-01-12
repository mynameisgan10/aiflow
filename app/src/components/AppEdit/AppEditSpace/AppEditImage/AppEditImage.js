import React from 'react';
import Aux from '../../../../HOC/aux/aux';
import './AppEditImage.css';

const AppEditImage = () => {
    return (
        <Aux>
            <div className="columns is-centered">
                <div className="column is-12">
                    <div className="has-text-centered">
                        <figure className="image is-128x128 AppEditImage-preview-image">
                            <img src="https://bulma.io/images/placeholders/256x256.png" className="AppEditImage-center-image" alt="preview" />
                        </figure>
                    </div>
                </div>
            </div>
            <div className="columns">
                <div className="column is-12 AppEditImage-border">
                    <div className="field">
                        <div className="file is-centered is-boxed is-success has-name">
                            <label className="file-label">
                                <input className="file-input" type="file" name="resume" />
                                <span className="file-cta">
                                    <span className="file-icon">
                                        <i className="fa fa-upload"></i>
                                    </span>
                                    <span className="file-label">
                                        Centered file…
                  </span>
                                </span>
                                <span className="file-name">
                                    Screen Shot 2017-07-29 at 15.54.25.png
                </span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </Aux>
    );
};

export default AppEditImage;