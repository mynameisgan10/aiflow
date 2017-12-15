import React, { Component } from 'react';
import Navbar from './navbar/navbar'
import ProjectArea from './projectArea/projectArea';
import AppDetail from '../components/AppDetail/AppDetail';
import NewApp from '../components/NewApp/NewApp';
import { Route } from 'react-router-dom';
import Aux from '../HOC/aux/aux'
class Dashboard extends Component {
    state = {
        showModal: true
    }
    appClick = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }
    render() {
        return (
            <div className="column is-12">
                <Navbar />
                <Route path="/" exact component={ProjectArea}></Route>
                <Route path="/test" exact component={AppDetail}></Route>
                <Route path="/new" exact component={NewApp}></Route>
            </div>
        );
    }
}

export default Dashboard;