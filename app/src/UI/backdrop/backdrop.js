import React from 'react';
import  "./backdrop.css";

const Backdrop = (props) => (
   props.show ? <div className="Modal" onClick={props.clicked}></div> : null
)

export default Backdrop;