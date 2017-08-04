import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setActiveTab } from '../../actions/navbar';

class Facebook extends Component {

    componentDidMount(){
        this.props.setActiveTab(2);
    }

    render() {
        return (
            <h4>Facebook</h4>
        )
    }
}


export default connect(null, { setActiveTab })(Facebook);