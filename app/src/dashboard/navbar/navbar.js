import React from 'react';
import PropTypes from 'prop-types';

const Navbar = props => {
    return (
        <div className="container is-fluid">
            <div className="columns">
                <div className="column is-12">
                    <nav className="level navbar has-text-centered">
                        <div className="level-left">
                            <div className="level-item">
                                <p className="subtitle is-5">
                                    <strong className="has-text-danger">AIFlow</strong>
                                </p>
                            </div>
                            <div className="level-item">
                                <div className="field has-addons">
                                    <p className="control">
                                        <input className="input" type="text" placeholder="Find an app" />
                                    </p>
                                    <p className="control">
                                        <button className="button has-text-link">
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