import React from 'react';
import PropTypes from 'prop-types';

const Navbar = props => {
    return (
        <div className="container is-fluid">
            <div className="columns">
                <div className="column is-12">
                    <nav className="level navbar has-text-centered">
                        <div class="level-left">
                            <div class="level-item">
                                <p class="subtitle is-5">
                                    <strong>AIFlow</strong>
                                </p>
                            </div>
                            <div class="level-item">
                                <div class="field has-addons">
                                    <p class="control">
                                        <input class="input" type="text" placeholder="Find a post" />
                                    </p>
                                    <p class="control">
                                        <button class="button">
                                            Search
                                </button>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="level-right">
                            <p className="level-item"><strong>All</strong></p>
                            <p className="level-item"><a>Published</a></p>
                            <p className="level-item"><a>Drafts</a></p>
                            <p className="level-item"><a>Deleted</a></p>
                            <p className="level-item"><a className="button is-success">New</a></p>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

Navbar.propTypes = {

};

export default Navbar;