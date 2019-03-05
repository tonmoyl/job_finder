import React from 'react';
import { Route } from 'react-router-dom';



export default class PostingForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      id: "",
      company: "",
      logo_url: "",
      address: "",
      link_url: "",
      description: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  componentDidMount(){
    // const postingId = this.props.match.params.postingId;
    // if (this.props.formType === "Update") {
    //   this.props.fetchPosting(this.props.match.params.postingId).then( ({posting}) => {
    //     this.setState({
    //       id: posting.id,
    //       company: posting.company,
    //       logo_url: posting.logo_url,
    //       address: posting.address,
    //       link_url: posting.link_url,
    //       description: posting.description
    //     });
    //   })
    // };
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.postingId !== nextProps.match.params.postingId) {
      this.props.fetchPosting(nextProps.match.params.postingId).then( ({posting}) => {
        this.setState({
          id: posting.id,
          company: posting.company,
          logo_url: posting.logo_url,
          address: posting.address,
          link_url: posting.link_url,
          description: posting.description
        });
      })
    };
  };

  update(property) {
    return e => this.setState({ [property]: e.target.value })
  };

  handleSubmit(e) {
    // e.preventDefault();
    // let body = {};
    // body["quillText"] = this.quill.getContents();
    // body["plainText"] = this.quill.getText();
    // let parsedBody = JSON.stringify(body);
    //
    // if (this.state.notebook_id === null) {
    //   this.setState({body: parsedBody, postingbook_id: Object.keys(this.props.notebooks)[0]});
    //   this.state.notebook_id = Object.keys(this.props.notebooks)[0];
    // }
    //
    // this.state.body = parsedBody;
    // const posting = merge({}, this.state, {body: parsedBody});
    // this.props.processForm(note).then( ()=> {
    //   if (this.props.formType === "Create") {
    //     let postingIdx = Object.keys(this.props.notes);
    //     let newIdx = postingIdx[postingIdx.length-1];
    //     this.props.history.push(`/main/${newIdx}`);
    //   }
    // });
  };

  renderErrors() {
    // if (this.props.errors) {
    //   return (
    //     <ul>
    //       {this.props.errors.map( (error, idx) => (
    //         <li key={`error-${idx}`}>
    //           {error}
    //         </li>
    //       ))}
    //     </ul>
    //   )
    // }
  }



  render(){
    return (
      <div id="posting-document" className='posting-show'>
        Hello
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
