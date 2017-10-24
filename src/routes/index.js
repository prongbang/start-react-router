import React from 'react'
import {Router, Route, IndexRoute, browserHistory, hashHistory,} from 'react-router'

import App from '../containers/app/App'
import Home from '../containers/home'
import Member from '../containers/member'
import MemberEdit from '../containers/member/edit'
import NotFound from '../components/not-found'

const Routes = (props)=> (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="member" component={Member}/>
            <Route path="member/:id" component={MemberEdit}/>
            <Route path="*" component={NotFound}/>
        </Route>
    </Router>
)

export default Routes
