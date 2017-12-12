import React, { Component } from 'react';
import Navbar from './navbar/navbar'
import ProjectArea from './projectArea/projectArea';

class Dashboard extends Component {
    render() {
        return (


            <div className="column is-12 has-text-centered">
                <Navbar />
                <ProjectArea />
            </div>

        );
    }
}

export default Dashboard;