import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class PlayerSelection extends Component {
    render() {
        const { position } = this.props;
        return (
            <div>
                {position}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { position: state.team.selectedPosition };
}

export default connect(mapStateToProps, actions)(PlayerSelection);