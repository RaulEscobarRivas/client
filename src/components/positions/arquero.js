import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Arquero extends Component {
    handleSelect(e) {
        console.log(e.currentTarget.dataset.option);
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
        options: ['Jugador 1', 'Jugador 2', 'Jugador 3', 'Jugador 4']
    };
}

export default connect(mapStateToProps, actions)(Arquero);