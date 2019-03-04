import React from 'react';
import { Link } from 'react-router-dom';

export default class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: "",
      noteIds: [],
      input: "",
    }
    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(e) {
    console.log('hit');
  }

  filterFunction() {
    console.log('hitx2')
  }


  render() {

    return (
      <div id="search-form" className="search-side dropdown">
        <input
          type="text"
          placeholder="Search Jobs..."
          id="myInput"
          className="search-input"
          onChange={this.updateInput}
          ></input>
      </div>
    )
  }
}
