import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class SignUp extends Component {

  onSubmit = (formProps) => {
    const { match, location, history } = this.props
    this.props.signUp(formProps, () => {
      this.props.history.push('/feature');
    });

    console.log("history and location", history, location);
  }


  render() {
    const { handleSubmit } = this.props;
    return (
      <div className='container d-flex flex-column align-items-center'>
        <form onSubmit={handleSubmit(this.onSubmit)} >
          <div className="mb-3">
            <label className="form-label">Email address </label>
            <Field name="email" type="text"
              component="input"
              autoComplete="none"
            />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password </label>
            <Field name="password" type="password"
              component="input"
              autoComplete="none" />
          </div>
          <div>
            {this.props.errorMessage}
          </div>
          <button className="btn btn-primary">Sign Up! </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.auth.errorMessage
  };

}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signUp' })
)(SignUp);