import React from 'react';
import { Link, withRouter } from 'react-router-dom';


export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      about_me: '',
      education: '',
      skills: "",
      looking_for: ""
    };
  };

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
  };

  render() {
    return (
      <div className='edit-personal'>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              value={this.state.about_me}
              onChange={this.update('about_me')}
              placeholder="Enter About Me"
            />
          </label>
          <label>
            <input
              type="text"
              value={this.state.skills}
              onChange={this.update('skills')}
              placeholder="Enter Skills"
            />
          </label>
          <label>
            <input
              type="text"
              value={this.state.Education}
              onChange={this.update('Education')}
              placeholder="Enter Education"
            />
          </label>
          <label>
            <input
              type="text"
              value={this.state.looking_for}
              onChange={this.update('looking_for')}
              placeholder="Enter Job Description of What You Are Looking For"
            />
          </label>
        </form>
      </div>
    )
  }
}
