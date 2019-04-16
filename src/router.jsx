import React, { Component } from 'react'
import { HashRouter, Route, Switch} from 'react-router-dom'
import Home from './views/home/home'
import { Provider } from 'react-redux';
import store from './store/index';
import Button from './views/ui/button'
import Welcome from './views/welcome/welcome'
import Login from './views/login/login'
import City from './views/city/city'
import App from './App'
export default class router extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <HashRouter>
            <App>
              <Switch>
                <Route path="/login" component={Login}></Route>
                <Route path="/" render={() =>
                  <Home>
                    <Switch>
                      <Route path="/home" component={Welcome} />
                      <Route path="/ui/buttons" component={Button} />
                      <Route path="/city" component={City} />
                      <Route component={Welcome} />
                    </Switch>
                  </Home>
                }>
                </Route>
              </Switch>
            </App>
          </HashRouter>
        </Provider>
      </div>
    )
  }
}
