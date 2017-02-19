import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class SignUp extends Component {
    handleFormSubmit({ email, password }) {
        this.props.signupUser(email, password);
    }

    renderErrorMessage(subject) {
        return subject.touched && subject.error && <div className="error">{subject.error}</div>;
    }

    renderAlert() {
        console.log(this.props);
        if(this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>{'Oops! '}</strong>{this.props.errorMessage}
                </div>
            );
        }
    }

    render() {
        const { handleSubmit, fields: { email, password, passwordConfirm }} = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                    <label>{'Email:'}</label>
                    <input {...email} className="form-control" />
                    {this.renderErrorMessage(email)}
                </fieldset>
                <fieldset className="form-group">
                    <label>{'Password:'}</label>
                    <input {...password} type="password" className="form-control" />
                    {this.renderErrorMessage(password)}
                </fieldset>
                <fieldset className="form-group">
                    <label>{'Confirm Password:'}</label>
                    <input {...passwordConfirm} type="password" className="form-control" />
                    {this.renderErrorMessage(passwordConfirm)}
                </fieldset>
                {this.renderAlert()}
                <button action="submit" className="btn btn-primary">
                    {'Sign in'}
                </button>
            </form>
        );
    }
}

function validate(formProps) {
    const errors = {};

    if (!formProps.email) {
        errors.email = 'Please enter an email';
    }

    if (!formProps.password) {
        errors.password = 'Please enter a password';
    }


    if (!formProps.passwordConfirm) {
        errors.passwordConfirm = 'Please enter a password confirmation';
    }

    if (formProps.password !== formProps.passwordConfirm) {
        errors.passwordConfirm = 'Passwords must match';
    }

    return errors;
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.error };
}

export default reduxForm({
    form: 'signup',
    fields: ['email', 'password', 'passwordConfirm'],
    validate
}, mapStateToProps, actions)(SignUp);