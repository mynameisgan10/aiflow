import React from 'react';
import "/Users/gan/Desktop/AIflow/app/node_modules/html5-device-mockups/dist/device-mockups.min.css";
import './AppEditDevices.css';

const AppEditDevices = () => {
    return (
        <div className="columns AppEditDevices-height">
            <div className="column is-4">
                <aside className="menu">
                    <p className="menu-label">
                        Devices
                    </p>
                    <ul className="menu-list">
                        <div className="field">
                            <label className="label">Name</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Search for any devices" />
                            </div>
                        </div>
                    </ul>
                    <p className="menu-label">
                        Categories
                    </p>
                    <ul className="menu-list">
                        <li><a>Apple</a></li>
                        <li>
                            <a>Samsung</a>
                            <ul>
                                <li><a className="is-active">S6</a></li>
                                <li><a>S8</a></li>
                                <li><a>Note8</a></li>
                            </ul>
                        </li>
                        <li><a>Huawei</a></li>
                        <li><a>Oneplus</a></li>

                    </ul>
                </aside>
            </div>
            <div className="column is-8 is-vcentered AppEditDevices-device-wrapper">
                <div className="device-wrapper container AppEditDevices-device-wrapper-sizing">
                    <div className="device" data-device="galaxyS5" data-orientation="portrait" data-color="black">
                        <div className="screen">
                            <h1 className="device-app-demo">
                            </h1>
                        </div>
                        {/* <div className="button">
    
                                         </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppEditDevices;