import React, { Component } from 'react';
import Aux from '../../../HOC/aux/aux';
import './AppEditSpace.css';
import AppEditText from './AppEditText/AppEditText';
import AppEditImage from './AppEditImage/AppEditImage';


class AppEditSpace extends Component {
    render() {
        let editArea = (<AppEditText/>);
        let selectedItem = "image";
        if(selectedItem === "image"){
            editArea = (<AppEditImage/>)
        }
        return (
            <Aux>
                <div className="AppEditSpace-editor">
                    {editArea}
                </div>
            </Aux>
        );
    }
}

export default AppEditSpace;