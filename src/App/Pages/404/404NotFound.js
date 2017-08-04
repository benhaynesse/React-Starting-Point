import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setActiveTab } from '../../actions/navbar';
import { NOT_FOUND_ID } from '../../constants/index';


class NotFoundPage extends Component {

    componentDidMount(){
        this.props.setActiveTab(NOT_FOUND_ID);
    }

    render() {
        return (
            <h3>
        Soz, page not found. Have a look at a picture of this car you cant afford or watch this video while you wait.
        P.S. youll be waiting a while
    </h3>
        )
    }
}


export default connect(null, { setActiveTab })(NotFoundPage);
