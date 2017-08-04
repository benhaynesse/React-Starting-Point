import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setActiveTab } from '../../actions/navbar';

class Twitter extends Component {

    componentDidMount(){
        this.props.setActiveTab(3);
    }

    render() {
        return (
            <h4>Twitter</h4>
        )
    }
}


export default connect(null, { setActiveTab })(Twitter);