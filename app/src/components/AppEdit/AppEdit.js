import React from 'react';
import Aux from '../../HOC/aux/aux'
import "/Users/gan/Desktop/AIflow/app/node_modules/html5-device-mockups/dist/device-mockups.min.css"

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
                        <div className="columns is-vcentered">
                            <div className="column is-6">
                                <div className="device-wrapper container">
                                    <div className="device" data-device="iPhone7" data-orientation="portrait" data-color="black">
                                        <div className="screen">

                                        </div>
                                        {/* <div className="button">

                                     </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="column is-6">
                                <div className="center-image">
                                    <figure className="image is-128x128">
                                        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Placeholder image" />
                                    </figure>
                                </div>
                                <h1 className="title is-2">
                                    <i class="fa fa-plus-square fa-2x" aria-hidden="true"></i>
                                </h1>
                                <h1 className="title is-2">
                                    <i class="fa fa-text-width" aria-hidden="true"></i>
                                </h1>
                                <h1 className="title is-2">
                                    <i class="fa fa-camera-retro" aria-hidden="true"></i>
                                </h1>
                                <h1 className="title is-2">
                                    <i class="fa fa-link" aria-hidden="true"></i>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="hero-foot">
                <div className="container">
                    <div className="tabs is-centered">
                        <ul>
                            <li><a>And this at the bottom</a></li>
                        </ul>
                    </div>
                </div>
            </div> */}
            </section>
        </Aux>

    );
};

export default AppEdit;