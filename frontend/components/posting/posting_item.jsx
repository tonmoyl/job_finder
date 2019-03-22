import React from 'react';

export default class PostingItem extends React.Component{
  constructor(props){
    super(props)
  }

  render() {
    let company = "";
    let role = "";
    let logo_url = "";
    let address = "";
    let link_url = "";
    let description = "";
    if (this.props.postingItem) {
      company = this.props.postingItem.company;
      role = this.props.postingItem.role;
      logo_url = this.props.postingItem.logo_url;
      address = this.props.postingItem.address;
      link_url = this.props.postingItem.link_url;
      description = this.props.postingItem.description;
    }

    return (
      <div className="posting-item">
        <button className="btn" onClick={this.props.goBack}>
          Back
        </button>

        <div className="posting-header" >
          <div className="logo header-left">
            <img src={logo_url} alt="logo" />
          </div>

          <div className="header-right">
            <div className="role">
              {role}
            </div>

            <div className="company-name">
              {company}
            </div>

            <div className="address">
              {address}
            </div>

            <div className="link">
              <a href={link_url}>{link_url}</a>
            </div>
          </div>

        </div>


        <div className="description">
          {description}
        </div>

      </div>
    )
  }
}
