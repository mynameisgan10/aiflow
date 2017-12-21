import React, { Component } from 'react';
import ProjectArea from '../../containers/projectArea/projectArea';
import AppDetail from '../../containers/AppDetail/AppDetail'
import NewApp from '../../containers/NewApp/NewApp';
import NavBar from '../Navbar/Navbar';
import { Route, Switch,Redirect } from 'react-router-dom';
class Layout extends Component {
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
                <NavBar />
                <Switch>
                    <Route path="/" exact component={ProjectArea}></Route>
                    <Route path="/appdetail" exact component={AppDetail}></Route>
                    <Route path="/new" exact component={NewApp}></Route>
                    <Route path="*" render={() =><Redirect to="/"/>}/>
                </Switch>
            </div>
        );
    }
}

export default Layout;