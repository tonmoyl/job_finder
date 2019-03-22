import React from 'react';
import Greeting from './greeting/greeting_container';
import Search from './search/search_container';
import PostingForm from './posting/posting_form_container';
import PostingIndex from './posting/posting_index_container';
import PostingItem from './posting/posting_item_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import EditPersonal from './profile/edit_personal_container';

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


    <div className="header">
      <div className="header-title">Job Finder</div>
      <AuthRoute path="/" component={Greeting} />
    </div>

    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>



    <Route path="/" component={Search} />

    <ProtectedRoute exact path="/personal" component={EditPersonal} />
    <Route exact path="/job/:jobId" component={PostingItem} />

  </div>
);

export default App;
