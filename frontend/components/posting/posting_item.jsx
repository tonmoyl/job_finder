import React from 'react';

export default class PostingItem extends React.Component{
  constructor(props){
    super(props)
  }

  render() {
    let show = ""
    if (this.props.postingItem) {
      show = this.props.postingItem.company
    }

    return (
      <div className="posting-item">
        Posting Item

        {show}
      </div>
    )
  }
}
