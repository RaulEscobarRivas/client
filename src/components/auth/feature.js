import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import PlayerSelection from '../player_selection';
import position from '../../enum/position_enum';

class Feature extends Component {
    componentWillMount() {
        this.props.fetchMessage();
    }

    handleSelect(e) {
        this.props.positionSelected(e.currentTarget.dataset.subject)
    }

    renderLinks(subjects) {
        return subjects.map( (subject, index) => (
            <li className="nav-item" key={index} data-subject={position[subject]} onClick={this.handleSelect.bind(this)}>
                <div>{position[subject]}</div>
            </li>
        ));
    }

    render () {
        return (
            <div>
                {this.props.message}
                <ul className="nav navbar-nav feature-list">
                    {this.renderLinks(Object.keys(position))}
                </ul>
                <div className="player-selection">
                    <PlayerSelection />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        message: state.auth.message
    };
}
export default connect(mapStateToProps, actions)(Feature);