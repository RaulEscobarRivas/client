import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import * as selectors from '../../reducers';

class Arquero extends Component {
    handleSelect(e) {
        const validOptions = this.props.options;
        const option = e.currentTarget.dataset.option;

        switch(option) {
            case validOptions[0]:
                return console.log(option);
            case validOptions[1]:
                return console.log(option);
            case validOptions[2]:
                return console.log(option);
            case validOptions[3]:
                return console.log(option);
            default:
                return;
        }
    }

    renderOptions(options) {
        return options.map( (option, index) =>
            <div key={index} className="card card-block" data-option={option} onClick={this.handleSelect.bind(this)}>
                <h4 className="card-title">{option}</h4>
                <p className="card-text">{'Selecciona al jugador.'}</p>
            </div>
        );
    }

    render() {
        return (
            <div className="player-options">
                {this.renderOptions(this.props.options)}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        selectedPosition: selectors.getSelectedPosition(state),
        options: ['Jugador 1', 'Jugador 2', 'Jugador 3', 'Jugador 4']
    };
}

export default connect(mapStateToProps, actions)(Arquero);