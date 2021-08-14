import { Route, Switch } from 'react-router-dom'

import { TaskContextProvider } from 'context/tasks-context'
import Columns from 'pages/Home/Columns'
import Notifications from 'pages/Home/Notifications'
import Settings from 'pages/Home/Settings'

const ColumnsWithContext = () => (
    <TaskContextProvider>
        <Columns />
    </TaskContextProvider>
)

const Routes = () => (
    <Switch>
        <Route path="/home/" exact component={ColumnsWithContext} />
        <Route path="/home/settings" component={Settings} />
        <Route path="/home/notifications" component={Notifications} />
    </Switch>
)

export default Routes;
