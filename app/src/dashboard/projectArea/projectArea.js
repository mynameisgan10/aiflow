import React from 'react';
import './projectArea.css'
import Apps from './apps/apps'

const projectArea = (props) => {

        return (<div className="background section is-medium">
            <Apps click={props.appClick}/>
        </div>)
   
};

export default projectArea;