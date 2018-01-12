import React from 'react';
import Aux from '../../HOC/aux/aux'
import './AppEdit.css';
import "/Users/gan/Desktop/AIflow/app/node_modules/html5-device-mockups/dist/device-mockups.min.css";
import AppEditSpace from './AppEditSpace/AppEditSpace';


const AppEdit = () => {
    return (

        <Aux>
            <section className="hero is-fullheight is-default is-bold is-centered">
                <div className="hero-head">
                    <nav className="navbar">
                        <div className="container is-fluid">
                            <div className="navbar-brand">
                                <a className="navbar-item" href="../">
                                    <img src="../images/bulma.png" alt="Logo" />
                                </a>
                                <span className="navbar-burger burger" data-target="navbarMenu">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                            </div>
                            <div id="navbarMenu" className="navbar-menu">
                                <div className="navbar-end">
                                    <a className="navbar-item is-active">
                                        Main
            </a>
                                    <a className="navbar-item">
                                        Editor
            </a>
                                    <a className="navbar-item">
                                        Your Information
            </a>
                                    <a className="navbar-item">
                                        Team
            </a>
                                    <a className="navbar-item">
                                        Publish
            </a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="columns">
                            <div className="column is-6 is-vcentered">
                                <div className="device-wrapper container">
                                    <div className="device" data-device="iPhone7" data-orientation="portrait" data-color="black">
                                        <div className="screen">
                                            <h1 className="device-app-demo">
                                                The app will go here
                                            </h1>
                                        </div>
                                        {/* <div className="button">

                                     </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="column is-6">
                                <div className="columns">
                                    <div className="column is-3">
                                        <h1 className="title is-2">
                                            <i class="fa fa-plus-square fa-2x AppEdit-add-item" aria-hidden="true"></i>
                                        </h1>
                                    </div>
                                    <div className="column is-3">
                                        <h1 className="title is-2">
                                            <i class="fa fa-text-width fa-2x AppEdit-add-text" aria-hidden="true"></i>
                                        </h1>
                                    </div>
                                    <div className="column is-3">
                                        <h1 className="title is-2">
                                            <i class="fa fa-camera-retro fa-2x AppEdit-add-image" aria-hidden="true"></i>
                                        </h1>
                                    </div>
                                    <div className="column is-3">
                                        <h1 className="title is-2">
                                            <i class="fa fa-link fa-2x AppEdit-link-page" aria-hidden="true"></i>
                                        </h1>
                                    </div>
                                </div>
                                <div className="columns">
                                    <div className="column is-12">
                                        <AppEditSpace />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Aux>

    );
};

export default AppEdit;