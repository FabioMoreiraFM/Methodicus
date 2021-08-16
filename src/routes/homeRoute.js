import { Route, Switch } from 'react-router-dom'

import Columns from 'pages/Home/Columns'
import Notifications from 'pages/Home/Notifications'
import Settings from 'pages/Home/Settings'

const Routes = () => (
    <Switch>
        <Route path="/home/" exact component={Columns} />
        <Route path="/home/settings" component={Settings} />
        <Route path="/home/notifications" component={Notifications} />
    </Switch>
)

export default Routes;
