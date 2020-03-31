import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import Header from '../components/Header'
import React from 'react'
import PostSecretPage from '../components/PostSecretPage'
import ReadSecretPage from '../components/ReadSecretPage'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path="/" component={PostSecretPage} exact={true} />
                <Route path="/:key" component={ReadSecretPage}/>
            </Switch>
        </BrowserRouter>
    );
}

export default AppRouter;
