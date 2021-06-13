import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signin from './screen/Signin';
import PrivateRoute from './PrivateRoute';
import UserList from './screen/UserList';
import Menu from "./core/Menu";

const Routes = () => {
    return (
        <BrowserRouter>
            <div>
                <Menu />
                <Switch>
                    <PrivateRoute path="/" exact component={UserList} />
                    <Route path="/signin" exact component={Signin} />
                    <PrivateRoute path="/home" exact component={UserList} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default Routes;
