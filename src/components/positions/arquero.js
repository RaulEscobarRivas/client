import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Arquero extends Component {
    render() {
        return <div>{'Arquero Component'}</div>;
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps, actions)(Arquero);