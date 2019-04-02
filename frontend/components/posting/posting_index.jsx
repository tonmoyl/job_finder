import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '../list_item/list_item_container';

export default class PostingIndex extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      postingIds: []
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      postingIds: nextProps.postingIds
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.postingIds.length !== this.props.postingIds.length) {
      const postingIds = Object.keys(this.props.postings);
      this.setState({postingIds: postingIds})
    }
  }

  render(){
    let count = 0;
    let postingIds;

    if (this.props.componentType === "posting-index") {
      postingIds = this.state.postingIds;
    } else {
      postingIds = this.props.postingIds;
    }

    let postings = postingIds.map( (id) => {
      count ++;

      return (
        <li key={id}>
          <ListItem posting={this.props.postings[id]} />
        </li>
      );
    });

    let createButton;
    if (this.props.currentId) {
      createButton = (
        <Link to="/new_posting">
          <div className="create-btn">Create Posting</div>
        </Link>
      )
    }

    return(
      <div id={this.props.componentType} className={this.props.componentType}>
        <div className="posting-index-header">
          <div className="header-title">
            <h2>{this.props.componentType}</h2>
          </div>
          {createButton}
          <div className="postingslist-footer">
            <h4>{count} postings</h4>
          </div>
        </div>
        <div className="posting-list">
          <ul>
            {postings}
          </ul>
        </div>
      </div>
    )
  }

}
