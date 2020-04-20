import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import React from 'react'
import PostSecretPage from '../components/PostSecretPage'
import ForwardOrMessage from '../components/ForwardOrMessage';
import ReadSecretPageStaging from '../components/ReadSecretPageStaging';
const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/:secretKey" component={ForwardOrMessage}/>
                <Route path="/" component={PostSecretPage} exact={true} />
            </Switch>
        </BrowserRouter>
    );
}

export default AppRouter;
