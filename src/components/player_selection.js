import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import position from '../enum/position_enum';
import Arquero from './positions/arquero';

class PlayerSelection extends Component {
    render() {
        const { selectedPosition } = this.props;
        switch(selectedPosition) {
            case position.ARQUERO:
                return <Arquero />;
            case position.DEFENSA:
                return <div>{'Seleccionó DEFENSA'}</div>;
            case position.MEDIO_CAMPO:
                return <div>{'Seleccionó MEDIO_CAMPO'}</div>;
            case position.DELANTERA:
                return <div>{'Seleccionó DELANTERA'}</div>;
            default:
                return <div>{'Seleccioná una posición'}</div>;
        }
    }
}

function mapStateToProps(state) {
    return { selectedPosition: state.team.selectedPosition };
}

export default connect(mapStateToProps, actions)(PlayerSelection);