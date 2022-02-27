import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

import AuthContextProvider from './context/AuthContext';
import './index.css';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import TestPage from './pages/TestPage';
import EventsPage from './pages/EventsPage';
import CreateEventPage from './pages/CreateEvents/CreateEventPage';
import CreateEventPageInformation from './pages/CreateEvents/CreateEventPageInformation';
import PublishPage from './pages/CreateEvents/PublishPage';
import InviteFriendsPage from './pages/CreateEvents/InviteFriendsPage';
import NotificationPage from './pages/NotificationPage';
import MapPage from './pages/MapPage';
import HomePage from './pages/HomePage';
import Event from './pages/MyEvent';

import reportWebVitals from './reportWebVitals';

// themes and styles
import { myTheme } from './styles/darkTheme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global';

// components and apges
import { Menu } from './components';


axios.interceptors.request.use(function(config) {
  config.headers = config.headers || {};
  const _csrf = Cookies.get('XSRF-TOKEN');
  config.headers!['xsrf-token']! = _csrf!;

  // Do something before request is sent
  return config;
}, function(error) {
  // Do something with request error
  return Promise.reject(error);
});


ReactDOM.render(
    <React.StrictMode>
      <AuthContextProvider>
        <ThemeProvider theme={myTheme}>
          <GlobalStyles />
          <Router>
            <Menu></Menu>

            <Switch>
              <Route exact path="/">
                <LoginPage />
              </Route>
              <Route exact path="/profile">
                <ProfilePage />
              </Route>
              <Route exact path="/test">
                <TestPage />
              </Route>
              <Route exact path="/events">
                <EventsPage />
              </Route>
              <Route exact path="/eventPage">
                <CreateEventPage />
              </Route>
              <Route exact path="/CreateEventPageInformation">
                <CreateEventPageInformation />
              </Route>
              <Route exact path="/PublishPage">
                < PublishPage/>
              </Route>
              <Route exact path="/InviteFriendsPage">
                < InviteFriendsPage/>
              </Route>
              <Route exact path="/notifications">
                < NotificationPage/>
              </Route>
              <Route exact path="/map">
                < MapPage/>
              </Route>
              <Route exact path="/home">
                < HomePage/>
              </Route>
              <Route path="/myevent/:id">
                <Event/>
              </Route>
            </Switch>
          </Router>
        </ThemeProvider>
      </AuthContextProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
