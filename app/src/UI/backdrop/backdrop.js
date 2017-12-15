import React from 'react';
import "./backdrop.css";
import Aux from '../../HOC/aux/aux'

const Backdrop = (props) => (
   props.show ? <div className="Modal" onClick={props.clicked}></div> : null
)

export default Backdrop;