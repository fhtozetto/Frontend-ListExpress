import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Dashboard from '../dashboard/dashboard'
import Importar from '../dashboard/importa/importar'

export default props => (
    <div className='content-wrapper'> 
        <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/importar' component={Importar} />
            <Redirect from='*' to='/'/>
        </Switch>
    </div>
)