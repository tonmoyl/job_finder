import React from 'react';

export default class PostingItem extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      applied: this.props.applied
    }
  }

  componentShouldUpdate(prevProps) {
    if (this.props.applied !== this.state.applied) {
      this.setState({applied: this.props.applied})
    }
  }

  render() {
    let company = "";
    let role = "";
    let logo_url = "";
    let address = "";
    let link_url = "";
    let description = "";
    let descriptions = "";
    if (this.props.postingItem) {
      company = this.props.postingItem.company;
      role = this.props.postingItem.role;
      logo_url = this.props.postingItem.logo_url;
      address = this.props.postingItem.address;
      link_url = this.props.postingItem.link_url;
      description = this.props.postingItem.description;
    }

    let applied = "apply";
    let processForm = () => {
      this.props.createSubmit(this.props.postingItem.id);
    }
    if (this.props.applied) {
      applied = "applied";
      processForm = () => {
        this.props.deleteSubmit(this.props.postingItem.id);
      }
    }

    return (
      <div className="posting-item">
        <button className="back-btn" onClick={this.props.goBack}>
          Back
        </button>

        <button className="apply-btn" onClick={processForm}>
          {applied}
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
              <a href={link_url}>Link to Website</a>
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
