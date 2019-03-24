import React from 'react';

export default class PostingItem extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      applied: this.props.applied,
      company: "",
      role: "",
      logo_url: "",
      address: "",
      link_url: "",
      description: "",
      descriptions: ""
    }

    if (this.props.postingItem) {
        this.state.company = this.props.postingItem.company;
        this.state.role = this.props.postingItem.role;
        this.state.logo_url = this.props.postingItem.logo_url;
        this.state.address = this.props.postingItem.address;
        this.state.link_url = this.props.postingItem.link_url;
        this.state.description = this.props.postingItem.description;
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.postingItem && this.state.company != nextProps.postingItem.company) {

      this.setState({
        company: nextProps.postingItem.company,
        role: nextProps.postingItem.role,
        logo_url: nextProps.postingItem.logo_url,
        address: nextProps.postingItem.address,
        link_url: nextProps.postingItem.link_url,
        description: nextProps.postingItem.description,
        applied: nextProps.applied
      })
    }
  }

  render() {

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
        <button className="back-btn button" onClick={this.props.goBack}>
          Back
        </button>

        <button className="apply-btn button" onClick={processForm}>
          {applied}
        </button>

        <div className="posting-header" >
          <div className="logo header-left">
            <img src={this.state.logo_url} alt="logo" />
          </div>

          <div className="header-right">
            <div className="role">
              {this.state.role}
            </div>

            <div className="company-name">
              {this.state.company}
            </div>

            <div className="address">
              {this.state.address}
            </div>

            <div className="link">
              <a href={this.state.link_url}>Link to Website</a>
            </div>
          </div>

        </div>


        <div className="description">
            {this.state.description}
        </div>

      </div>
    )
  }
}
