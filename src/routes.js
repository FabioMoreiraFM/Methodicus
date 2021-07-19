import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from 'pages/Login'
import Home from 'pages/Home'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Home} />            
            <Route path="/" exact component={Login} />
            <Route path="*" component={Login} />            
        </Switch>    
    </BrowserRouter>
)

export default Routes;