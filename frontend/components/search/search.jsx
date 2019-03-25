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
    this.clearInput = this.clearInput.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      postings: nextProps.postings,
      viewIds: nextProps.postingIds,
      allIds: nextProps.postingIds
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    document.getElementById("search-form").style.height = "50px";

    var allItems = Object.keys(this.state.postings);
    var foundItems = [];

    for (var i = 0; i < allItems.length; i++) {
      var itemId = allItems[i];
      var item = this.state.postings[itemId];
      if (
        item.company.indexOf(this.state.search) > -1 ||
        item.role.indexOf(this.state.search) > -1
      ) {
        foundItems.push(itemId);
      }
    }

    for (var i = 0; i < allItems.length; i++) {
      var itemId = allItems[i];
      var item = this.state.postings[itemId];
      if (
        !foundItems.includes(itemId) &&
        item.description.indexOf(this.state.search) > -1
      ) {
        foundItems.push(itemId);
      }
    }

    this.setState({viewIds: foundItems});
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value })
  };

  clearInput() {
    document.getElementById('search-input').value = "";
    this.setState({viewIds: this.state.allIds});
  }


  render() {
    return (
      <div className="main">
        <div id="search-form" className="search">
          <div className="search-bar">
            <form onSubmit={this.handleSubmit} className="search-form">
              <input id="search-input"
                type="text"
                placeholder="Search Jobs..."
                className="search-input"
                onChange={this.update('search')}
                ></input>
              <input
                type="submit"
                value="Search"
                className="search-btn button"
                />
            </form>

            <button
              onClick={this.clearInput}
              className="clear-btn"
              >
              Clear
            </button>

          </div>
        </div>

        <div className="results">
          <PostingIndex viewIds={this.state.viewIds} />
        </div>
      </div>
    )
  }
}
