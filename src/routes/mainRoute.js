import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import Home from 'pages/Home'
import Login from 'pages/Login';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Redirect path="*" to="/login" component={Login} />
        </Switch>
    </BrowserRouter>
)

export default Routes;
