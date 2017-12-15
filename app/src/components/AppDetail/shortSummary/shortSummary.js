import React from 'react';
import "/Users/gan/Desktop/AIflow/app/node_modules/html5-device-mockups/dist/device-mockups.min.css"
import "./shortSummary.css";
const ShortSummary = (props) => {
    return (
        <section className="hero is-fullheight is-default is-bold is-centered" onClick={props.clicked}>
            <div className="hero-head">
                <nav className="navbar">
                    <div className="container">
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
                        <div className="column is-3">
                            <div className="device-wrapper">
                                <div className="device" data-device="iPhone7" data-orientation="portrait" data-color="black">
                                    <div className="screen">

                                    </div>
                                    {/* <div className="button">

                                     </div> */}
                                </div>
                            </div>
                            {/* <figure className="image is-4by3">
                                <img src="http://placehold.it/800x600" alt="Description" />
                            </figure> */}
                        </div>
                        <div className="column is-3">
                            <div className="device-wrapper">
                                <div className="device" data-device="galaxyS5" data-orientation="portrait" data-color="black">
                                    <div className="screen">

                                    </div>
                                    {/* <div className="button">

                                     </div> */}
                                </div>
                            </div>
                            {/* <figure className="image is-4by3">
                                <img src="http://placehold.it/800x600" alt="Description" />
                            </figure> */}
                        </div>
                        <div className="column is-6 is-offset-1">
                            <div className="center-image">
                                <figure className="image is-128x128">
                                    <img src="https://bulma.io/images/placeholders/128x128.png" alt="Placeholder image" />
                                </figure>
                            </div>
                            <h1 className="title is-2">
                                Name of the App
                            </h1>
                            <h2 className="subtitle is-4">
                                Description about the app
                            </h2>
                            <br />
                            <p className="subtitle is-6">
                                Organization: something
                            </p>
                            <br />
                            <p className="subtitle is-6">
                                License: something
                            </p>
                            <br />
                            <p className="subtitle is-6">
                                Add-ons: something
                            </p>
                            <br />
                            <p className="subtitle is-6">
                                Platforms: something
                            </p>
                            <br />
                            <p className="has-text-centered">
                                <p className="button is-medium is-danger is-outlined">
                                    Edit
                                </p>
                            </p>
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
    )
};

export default ShortSummary;