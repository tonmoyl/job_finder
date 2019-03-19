import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '../list_item/list_item_container';

export default class PostingIndex extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      order: "newest",
      postingIds: []
    }
    // this.updateOrder = this.updateOrder.bind(this);
    // this.sortAlphabetical = this.sortAlphabetical.bind(this);
    // this.sortUpdate = this.sortUpdate.bind(this);
    // this.renderOrder = this.renderOrder.bind(this);
  }

  componentWillMount(){
    this.props.fetchPostings().then( (postings) => {
      const postingIds = Object.keys(postings.postings);
      // this.setState({postingIds: this.updateOrder()})
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.postingIds.length !== this.props.postingIds.length) {
      const postingIds = Object.keys(this.props.postings);
      this.setState({postingIds: postingIds})
    }
  }
  //
  // renderOrder(){
  //   this.updateOrder();
  //   this.setState({});
  // }
  //
  // updateOrder(){
  //   const order = document.getElementById("dropdown-order").value;
  //
  //   switch(order){
  //     case "newest":
  //       return this.sortUpdate();
  //     case "oldest":
  //       return this.sortUpdate().reverse();
  //     case "alphabetical":
  //       return this.sortAlphabetical();
  //     case "reverse-alphabetical":
  //       return this.sortAlphabetical().reverse();
  //     default:
  //       break
  //   }
  //
  //   this.state.order = order;
  //   return null;
  // }
  //
  // sortAlphabetical() {
  //   let postings = this.props.postings;
  //   let sorted = [];
  //
  //   for (var id in this.props.postings) {
  //     sorted.push([this.props.postings[id].title, id]);
  //   }
  //
  //   function comparator(a,b) {
  //     if (a[0].toLowerCase() < b[0].toLowerCase()) return -1;
  //     if (a[0].toLowerCase() > b[0].toLowerCase()) return 1;
  //     if (a[0].toLowerCase() === b[0].toLowerCase()) return 0;
  //   }
  //
  //
  //   sorted = sorted.sort(comparator);
  //   sorted = sorted.map( (item) => {
  //     return item[1];
  //   });
  //   this.state.postingIds = sorted;
  //   // this.setState({postingIds: sorted});
  //   return sorted;
  // }
  //
  // sortUpdate() {
  //   let postings = this.props.postings;
  //   let sorted = [];
  //
  //   for (var id in postings) {
  //     let postingUpdate = Date.parse(this.props.postings[id].updated_at);
  //
  //     sorted.push([postingUpdate, id]);
  //   }
  //
  //   function comparator(a,b) {
  //     if (a[0] < b[0]) return -1;
  //     if (a[0] > b[0]) return 1;
  //     if (a[0] === b[0]) return 0;
  //   }
  //
  //
  //   sorted = sorted.sort(comparator);
  //   sorted = sorted.map( (item) => {
  //     return item[1];
  //   });
  //   // this.setState({postingIds: sorted});
  //   this.state.postingIds = sorted;
  //   return sorted.reverse();
  // }

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

        const followLink = `/job/${id}`;

        return (
          <li key={id}>
            <ListItem posting={this.props.postings[id]} />
          </li>
        );
      });

    return(
      <div id={this.props.componentType} className={this.props.componentType}>
        <div className="posting-index-header">
          <div className="header-title">
            <h2>{this.props.componentType}</h2>
          </div>
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
