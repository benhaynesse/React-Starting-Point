import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setActiveTab } from '../../actions/navbar';
import { FACEBOOK_TAB_ID} from '../../constants/index';

class Facebook extends Component {

    componentDidMount(){
        this.props.setActiveTab(FACEBOOK_TAB_ID);
    }

    render() {
        return (
            <h4>Facebook</h4>
        )
    }
}


export default connect(null, { setActiveTab })(Facebook);