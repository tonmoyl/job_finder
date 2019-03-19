import React from 'react';
import { Link } from 'react-router-dom'

export default class ListItem extends React.Component{
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="list-item">
        <Link to={`/job/${this.props.id}`}>
          <div className="role">
            {this.props.role}
          </div>

          <div className="company-name">
            {this.props.company}
          </div>

          <div className="address">
            {this.props.address}
          </div>

          <div className="logo">
            <img src="#{this.props.logo_url}" alt="" />
          </div>
        </Link>

      </div>
    )
  }
}
