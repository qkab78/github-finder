import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';

import store from './redux/store'
import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './App';
import User from './components/user/User';
import About from './components/pages/About';
import NavBar from './components/layout/NavBar';
import NotFound from './components/pages/NotFound';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:username" component={User} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
