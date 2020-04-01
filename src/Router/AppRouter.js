import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import React from 'react'
import PostSecretPage from '../components/PostSecretPage'
import ReadSecretPage from '../components/ReadSecretPage'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={PostSecretPage} exact={true} />
                <Route path="/:secretKey" component={ReadSecretPage}/>
            </Switch>
        </BrowserRouter>
    );
}

export default AppRouter;
