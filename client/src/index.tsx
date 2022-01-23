import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom'

import { Home, SetPlayer, PlayGame, GameOver, About } from 'containers'
import { Routes } from 'models/routes';
import './style.scss';

ReactDOM.render(
  <HashRouter basename={Routes.HOME}>
    <Switch>
      <Route component={Home} exact path={Routes.HOME} />
      <Route component={SetPlayer} path={Routes.SETUP} />
      <Route component={PlayGame} path={Routes.PLAY} />
      <Route component={GameOver} path={Routes.OVER} />
      <Route component={About} path={Routes.ABOUT} />
    </Switch>
  </HashRouter>,
  document.getElementById('root')
);
