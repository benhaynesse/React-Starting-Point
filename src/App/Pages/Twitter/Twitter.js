import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setActiveTab } from '../../actions/navbar';
import { TWITTER_TAB_ID} from '../../constants/index';

class Twitter extends Component {

    componentDidMount(){
        this.props.setActiveTab(TWITTER_TAB_ID);
    }

    render() {
        return (
            <h4>Twitter</h4>
        )
    }
}


export default connect(null, { setActiveTab })(Twitter);