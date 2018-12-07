import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './component/Dashboard/Dashboard.jsx';
import Wizard from './component/Wizard/Wizard.jsx';

export default (
  <Switch>
    <Route exact path='/' component={ Dashboard }/>
    <Route path='/wizard' component={ Wizard }/>
  </Switch>
)
