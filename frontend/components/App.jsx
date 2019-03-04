import React from 'react';
import Greeting from './greeting/greeting_container';
import Search from './search/search_container';

const App = () => (
  <div>
    <h1>Job Finder</h1>
    <Greeting />
    <Search />
  </div>
);

export default App;
