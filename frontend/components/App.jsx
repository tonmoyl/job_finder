import React from 'react';
import Greeting from './greeting/greeting_container';
import Search from './search/search_container';
import PostingForm from './posting/posting_form_container';
import PostingIndex from './posting/posting_index_container';

const App = () => (
  <div>
    <h1>Job Finder</h1>
    <Greeting />
    <Search />
    <PostingForm />
    <PostingIndex />
  </div>
);

export default App;
