import React from 'react';
import { Link } from 'react-router-dom';
import PostingIndex from '../posting/posting_index_container';

export default class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      postings: this.props.postings,
      search: "",
      allIds: this.props.postingIds,
      viewIds: this.props.postingIds
    }
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      postings: nextProps.postings,
      viewIds: this.props.postingIds
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    document.getElementById("search-form").style.height = "50px";

    var searchItems = Object.keys(this.state.postings);
    var foundItems = [];

    for (var i = 0; i < searchItems.length; i++) {
      var itemId = searchItems[i];
      var item = this.state.postings[itemId];
      if (
        item.company.indexOf(this.state.search) > -1 ||
        item.role.indexOf(this.state.search) > -1
      ) {
        foundItems.push(itemId);
      }
    }

    for (var i = 0; i < searchItems.length; i++) {
      var itemId = searchItems[i];
      var item = this.state.postings[itemId];
      if (item.description.indexOf(this.state.search) > -1) {
        foundItems.push(itemId);
      }
    }
    console.log(foundItems)
    this.setState({viewIds: foundItems});
    console.log(this.state.viewIds);
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value })
  };

  filterFunction() {
    console.log('hitx2')
  }


  render() {

    return (
      <div id="search-form" className="search">
        <div className="search-bar">
          <form onSubmit={this.handleSubmit} className="search-form">
            <input
              type="text"
              placeholder="Search Jobs..."
              id="myInput"
              className="search-input"
              onChange={this.update('search')}
              ></input>
            <input
              type="submit"
              value="Search"
              />
          </form>

        </div>

        <div className="results">

        </div>
      </div>
    )
  }
}
