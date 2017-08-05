import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setActiveTab } from '../../actions/navbar';
import { SNAPCHAT_TAB_ID } from '../../constants/index';

import FontAwesome from 'react-fontawesome'




require('./snapchat.scss');

class Snapchat extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            user: {
                "id": '1',
                "first_name": "John",
                "last_name": "Doe",
                "username": "JohnDoe324",
                "age": 22,
                "gender": "M",
                "imageUrl": "https://dfwn148cvdexl.cloudfront.net/wp-content/uploads/2015/06/snapcode-300x300.png",
                "likes": 15,
                "tags": ["Snap", "Goon", "add"],
                "time_posted": "4"
            },
            likedUsers: []


        })
    }

    componentDidMount() {
        this.props.setActiveTab(SNAPCHAT_TAB_ID);
    }





    render() {
        return (            
                <h4>Snapchat</h4>
        )
    }

}



export default connect(null, { setActiveTab })(Snapchat);