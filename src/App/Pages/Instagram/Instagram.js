import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setActiveTab } from '../../actions/navbar';

class Instagram extends Component {

    componentDidMount(){
        this.props.setActiveTab(0);
    }

    render() {
        return (
            <h4>Instagram</h4>
        )
    }
}


export default connect(null, { setActiveTab })(Instagram);
