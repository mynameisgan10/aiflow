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
                    <div className="AppEditImage-dropArea">
                        <h2 className="subtitle is-4 AppEditImage-dropText">
                            Drag and drop your images here
                    </h2>
                        <h2 className="subtitle is-4">
                            or
                    </h2>
                        <div class="file is-primary is-centered">
                            <label class="file-label">
                                <input class="file-input" type="file" name="resume" />
                                <span class="file-cta">
                                    <span class="file-icon">
                                        <i class="fa fa-upload"></i>
                                    </span>
                                    <span class="file-label">
                                        Choose a file…
      </span>
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