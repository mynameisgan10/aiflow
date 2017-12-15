import React from 'react';
import {Link, NavLink} from 'react-router-dom';
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
                                    <Link to='/'><strong className="has-text-danger">AIFlow</strong></Link>
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
                            <p className="level-item"><NavLink to="/" exact activeClassName="has-text-weight-bold">All</NavLink></p>
                            <p className="level-item"><NavLink to="/published" exact activeClassName="has-text-weight-bold">Published</NavLink></p>
                            <p className="level-item"><NavLink to="/drafts" exact activeClassName="has-text-weight-bold">Drafts</NavLink></p>
                            <p className="level-item"><NavLink to="/deleted" exact activeClassName="has-text-weight-bold">Deleted</NavLink></p>
                            <p className="level-item"><NavLink to="/new" exact activeClassName="has-text-weight-bold"><p className="button is-success">New</p></NavLink></p>
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