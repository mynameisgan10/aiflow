import React, { Component } from 'react';
import ProjectArea from '../../containers/projectArea/projectArea';
import AppDetail from '../../containers/AppDetail/AppDetail'
import NewApp from '../../containers/NewApp/NewApp';
import NavBar from '../Navbar/Navbar';
import { Route, Switch,Redirect } from 'react-router-dom';
import Axios from 'axios';

class Layout extends Component {
    state = {
        showModal: true,
        isLoggedIn: true
    }
    componentDidUpdate(){
        Axios.get("/test");
    }
    appClick = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }
    render() {
        let layout = (
            <Switch>
                    <Route path="/" exact component={ProjectArea}></Route>
                    <Route path="/appdetail" exact component={AppDetail}></Route>
                    <Route path="/new" exact component={NewApp}></Route>
                    <Route path="*" render={() =><Redirect to="/"/>}/>
                </Switch>
        )
        if(!this.state.isLoggedIn){
            layout = (
                <h1>Test</h1>
            )
        }
        return (
            <div className="column is-12">
                <NavBar />
                {layout}
            </div>
        );
    }
}

export default Layout;