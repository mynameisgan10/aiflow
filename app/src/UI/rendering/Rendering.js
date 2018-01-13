import React from 'react';
import "./Rendering.css";
import Aux from '../../HOC/aux/aux';

const Rendering = () => {
    return (
        <Aux>
            <div class="sk-cube-grid">
                <div class="sk-cube sk-cube1"></div>
                <div class="sk-cube sk-cube2"></div>
                <div class="sk-cube sk-cube3"></div>
                <div class="sk-cube sk-cube4"></div>
                <div class="sk-cube sk-cube5"></div>
                <div class="sk-cube sk-cube6"></div>
                <div class="sk-cube sk-cube7"></div>
                <div class="sk-cube sk-cube8"></div>
                <div class="sk-cube sk-cube9"></div>
            </div>
            <h1 className="title is-4 has-text-centered">
                Compiling your app ...
            </h1>
        </Aux>
    );
};

export default Rendering;