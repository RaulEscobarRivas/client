import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Feature extends Component {
    componentWillMount() {
        this.props.fetchMessage();
    }

    renderLinks() {
        return [
                <li className="nav-item" key={1}>
                    <div>{'Arquero'}</div>
                </li>,
                <li className="nav-item" key={2}>
                    <div>{'Defensa'}</div>
                </li>,
                <li className="nav-item" key={3}>
                    <div>{'Medio campo'}</div>
                </li>,
                <li className="nav-item" key={4}>
                    <div>{'Delantera'}</div>
                </li>
            ];
    }

    render () {
        return (
            <div>
                {this.props.message}
                <ul className="nav navbar-nav feature-list">
                    {this.renderLinks()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { message: state.auth.message };
}
export default connect(mapStateToProps, actions)(Feature);