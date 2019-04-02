import React from 'react';
import { Route } from 'react-router-dom';
import merge from 'lodash/merge';

export default class PostingForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      id: null,
      company: "",
      role: "",
      logo_url: "",
      address: "",
      link_url: "",
      description: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);

  };

  update(property) {
    return e => this.setState({ [property]: e.target.value })
  };

  handleSubmit(e) {
    e.preventDefault();

    const posting = merge({}, this.state);

    this.props.processForm(posting)
  };



  render(){
    return (
      <div id="posting-document" className='posting'>
        <div className="header">
          Create new Posting
        </div>
        <form className="posting-form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>
              <input
                type="text"
                value={this.state.company}
                onChange={this.update('company')}
                className="posting-company"
                placeholder="Company Posting"
                />
            </label>

            <label>
              <input
                type="text"
                value={this.state.role}
                onChange={this.update('role')}
                className="posting-role"
                placeholder="Role of the Position"
                />
            </label>

            <label>
              <input
                type="text"
                value={this.state.logo_url}
                onChange={this.update('logo_url')}
                className="posting-logo-url"
                placeholder="Enter URL"
                />
            </label>

            <label>
              <input
                type="text"
                value={this.state.address}
                onChange={this.update('address')}
                className="posting-address"
                placeholder="Enter address"
                />
            </label>

            <label>
              <input
                type="text"
                value={this.state.link_url}
                onChange={this.update('link_url')}
                className="posting-link-url"
                placeholder="Enter link URL"
                />
            </label>

            <label>
              <input
                type="text"
                value={this.state.description}
                onChange={this.update('description')}
                className="posting-description"
                placeholder="Description Posting"
                />
            </label>

          <input
            className="posting-action-btn submit-btn"
            type="submit"
            value={this.props.formType} />
        </div>

        </form>

      </div>
    )
  }
}
