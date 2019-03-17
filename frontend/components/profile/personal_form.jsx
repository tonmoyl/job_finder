import React from 'react';
import { Link, withRouter } from 'react-router-dom';


export default class PersonalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      about_me: '',
      education: '',
      skills: "",
      looking_for: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  componentDidMount() {
    this.props.fetchPersonal().then( ({personal}) => {
      this.setState({
        id: personal.id,
        about_me: personal.about_me,
        education: personal.education,
        skills: personal.skills,
        looking_for: personal.looking_for
      })
    })
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    const profile = Object.assign({}, this.state);
    this.props.processForm(profile)
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
              value={this.state.education}
              onChange={this.update('education')}
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
          <input className="session-submit submit-btn" type="submit" value="Edit Personal" />
        </form>
      </div>
    )
  }
}
