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
        if(this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>{'Oops! '}</strong>{this.props.errorMessage}
                </div>
            );
        }
    }

    checkInput(email, password, passwordConfirm) {
        if (!email.dirty || !password.dirty || !passwordConfirm.dirty) {
            return true;
        }
        return false;
    }

    render() {
        const { handleSubmit, fields: { email, password, passwordConfirm }} = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                    <label>{'Correo electrónico:'}</label>
                    <input {...email} className="form-control" />
                    {this.renderErrorMessage(email)}
                </fieldset>
                <fieldset className="form-group">
                    <label>{'Contraseña:'}</label>
                    <input {...password} type="password" className="form-control" />
                    {this.renderErrorMessage(password)}
                </fieldset>
                <fieldset className="form-group">
                    <label>{'Confirmá tu contraseña:'}</label>
                    <input {...passwordConfirm} type="password" className="form-control" />
                    {this.renderErrorMessage(passwordConfirm)}
                </fieldset>
                {this.renderAlert()}
                <button action="submit" className="btn btn-primary" disabled={this.checkInput(email, password, passwordConfirm)}>
                    {'Ingresar'}
                </button>
            </form>
        );
    }
}

function validate(formProps) {
    const errors = {};

    if (!formProps.email) {
        errors.email = 'Ingresá un correo electrónico';
    }

    if (!formProps.password) {
        errors.password = 'Ingresá una contraseña';
    }


    if (!formProps.passwordConfirm) {
        errors.passwordConfirm = 'Confirmá tu contraseña';
    }

    if (formProps.password !== formProps.passwordConfirm) {
        errors.passwordConfirm = 'Contraseñas deben coincidir';
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