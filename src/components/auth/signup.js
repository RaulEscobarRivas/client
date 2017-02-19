import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class SignUp extends Component {
    renderErrorMessage(subject) {
        return subject.touched && subject.error && <div className="error">{subject.error}</div>;
    }

    renderContent(subject) {
        return (
            <fieldset className="form-group">
                <label>{`${subject}:`}</label>
                <input {...subject} className="form-control" />
                {this.renderErrorMessage(subject)}
            </fieldset>
        );
    }
    render() {
        const { handleSubmit, fields: { email, password, passwordConfirm }} = this.props;
        return (
            <form>
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

export default reduxForm({
    form: 'signup',
    fields: ['email', 'password', 'passwordConfirm'],
    validate
})(SignUp);