import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setActiveTab } from '../../actions/navbar';
import { INSTAGRAM_TAB_ID} from '../../constants/index';

class Instagram extends Component {

    componentDidMount(){
        this.props.setActiveTab(INSTAGRAM_TAB_ID);
    }

    render() {
        return (
            <h4>Instagram</h4>
        )
    }
}


export default connect(null, { setActiveTab })(Instagram);
