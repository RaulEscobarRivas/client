import axios from 'axios';
import { browserHistory } from 'react-router';
import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    FETCH_MESSAGE,
    POSITION_SELECTED
} from './types';

const API_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
    return function(dispatch){
        axios.post(`${API_URL}/signin`, { email, password })
            .then(response => {
                dispatch({ type: AUTH_USER });

                localStorage.setItem('token', response.data.token);

                browserHistory.push('/feature');
            })
            .catch(() => {
                dispatch(authError('Bad login info.'));
            });
    }
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        error
    }
}

export function signoutUser() {
    localStorage.removeItem('token');

    return {
        type: UNAUTH_USER
    }
}

export function signupUser(email, password) {
    return function(dispatch){
        axios.post(`${API_URL}/signup`, { email, password })
            .then(response => {
                dispatch({ type: AUTH_USER });

                localStorage.setItem('token', response.data.token);

                browserHistory.push('/feature');
            })
            .catch(error => {
                dispatch(authError(error.response.data.error));
            });
    }
}

export function fetchMessage() {
    return function(dispatch) {
        axios.get(API_URL, {
            headers: { authorization: localStorage.getItem('token') }
        })
            .then( response => {
                dispatch({
                    type: FETCH_MESSAGE,
                    payload: response.data.message
                })
            });
    }
}

export function positionSelected(position) {
    return {
        type: POSITION_SELECTED,
        position
    }
}