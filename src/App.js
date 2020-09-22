import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/login/login';
import Home from './pages/home/home';

import 'minireset.css';
import './App.less';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {/* exact 表示精确匹配 */}
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
