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
        <button className="back-btn button" onClick={this.props.goBack}>
          Back
        </button>
        <form onSubmit={this.handleSubmit} className="personal-form">
          <label>
            <div className="about-me caption">About Me</div>
            <textarea
              className="about-me textarea"
              type="text"
              value={this.state.about_me}
              onChange={this.update('about_me')}
              placeholder="Enter About Me"
            />
          </label>
          <label> <div className="skills caption">Skills </div>
            <textarea
              className="skills textarea"
              type="text"
              value={this.state.skills}
              onChange={this.update('skills')}
              placeholder="Enter Skills"
            />
          </label>
          <label> <div className="education caption">Education </div>
            <textarea
              className="education textarea"
              type="text"
              value={this.state.education}
              onChange={this.update('education')}
              placeholder="Enter Education"
            />
          </label>
          <label> <div className="looking-for caption">Looking For </div>
            <textarea
              className="looking-for textarea"
              type="text"
              value={this.state.looking_for}
              onChange={this.update('looking_for')}
              placeholder="Enter Job Description of What You Are Looking For"
            />
          </label>
          <input className="session-submit submit-btn button" type="submit" value="Edit Personal" />
        </form>
      </div>
    )
  }
}
