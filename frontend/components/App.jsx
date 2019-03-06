import React from 'react';
import Greeting from './greeting/greeting_container';
import Search from './search/search_container';
import PostingForm from './posting/posting_form_container';
import PostingIndex from './posting/posting_index_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>

    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>

    <h1>Job Finder</h1>
    <Greeting />
    <Route path="/" component={Search} />
    <AuthRoute path="/" component={Greeting} />
    <AuthRoute path="/" component={PostingIndex} />

  </div>
);

export default App;
