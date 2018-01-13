import React, { Component } from 'react';
import Aux from '../../../HOC/aux/aux';
import './AppEditSpace.css';
import AppEditText from './AppEditText/AppEditText';
import AppEditImage from './AppEditImage/AppEditImage';
import AppEditLink from './AppEditLink/AppEditLink';
import AppEditDevices from './AppEditDevices/AppEditDevices';


class AppEditSpace extends Component {
    render() {
        let selectedItem = this.props.selectedItem;
        let editArea = (<AppEditText/>);
        switch (selectedItem) {
            case "text":
                editArea = (<AppEditText/>)
                break;
            case "image":
                editArea = (<AppEditImage/>)
                break;
            case "link":
                editArea = (<AppEditLink/>)
                break;
            case "devices":
                editArea = (<AppEditDevices/>)
                break;
            default:
                editArea = (<AppEditText/>)
                break;
        }
        
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