import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Signin from './user/Signin';
// import PrivateRoute from './auth/PrivateRoute';
import UserList from './screen/UserList';



const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={UserList} />
                {/* <Route path="/shop" exact component={Shop} />
                <Route path="/signin" exact component={Signin} />
                <PrivateRoute path="/user/dashboard" exact component={Dashboard} />
                <Route path="/users/:userId" exact component={UserList} /> */}
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
