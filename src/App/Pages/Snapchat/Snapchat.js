import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setActiveTab } from '../../actions/navbar';
import { SNAPCHAT_TAB_ID } from '../../constants/index';

import FontAwesome from 'react-fontawesome'


import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import Paper from 'material-ui/Paper';
import Toggle from 'material-ui/Toggle';


require('./snapchat.scss');


import AlertIcon from '../../components/Icons/AlertIcon';
import Profile from './Profile';

const Paperstyle = {
    boxSizing: 'border-box',
    height: 30,
    width: '100%',
    textAlign: 'center',
    display: 'inline-block',
    background: '#262228',
    boxShadow: 'rgb(63, 181, 202) 0px 1px 10px'
};
const ToggleStyle = {
    boxSizing: 'border-box',
    alignSelf: 'center',
    float: 'right',
    marginRight: 15,
    fontSize: 13,
    width: 0,
    padding: 2
}


class Snapchat extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            likedUsers: [],
            notification: false,
            toggled: true
        })
    }

    componentDidMount() {
        this.props.setActiveTab(SNAPCHAT_TAB_ID);
    }

    handleAlert(event) {
        this.setState({ notification: true });

    }

    removeNotificatoin() {
        this.setState({ notification: false })
    }

    handleToggle(state) {
        // console.log(state)
        this.setState({ toggled: state })
    }



    render() {

        if (this.state.notification) {
            setTimeout(function () {
                this.setState({ notification: false });
            }.bind(this), 5000);
        }



        return (
            <div className="feed">
                <div style={{ 'background': 'rgba(0, 173, 255, 0.75)', 'height': this.state.notification ? 20 : 0, 'transition': 'height 0.5s ease-in', color: 'white' }}>
                    <p style={{ textAlign: 'center' }}>Toggle Full Profile View</p>

                </div>

                <Paper style={Paperstyle} zDepth={2}>
                    <Toggle
                        defaultToggled={this.state.toggled}
                        style={ToggleStyle}
                        thumbStyle={{ background: 'red' }}
                        trackStyle={{ background: 'black' }}
                        thumbSwitchedStyle={{ 'background': '#3FB5CA' }}
                        trackSwitchedStyle={{ 'background': 'gray' }}
                        onToggle={(e, state) => this.handleToggle(state)}
                    />
                    <AlertIcon onClick={(state) => this.handleAlert(state)} style={{ 'float': 'right' }} color={'white'} hoverColor={'#00FFFF'} />

                </Paper>

                <Profile toggled={this.state.toggled} />
                <Profile toggled={this.state.toggled} />
                <Profile toggled={this.state.toggled} />
                <Profile toggled={this.state.toggled} />

            </div>
        )
    }

}



export default connect(null, { setActiveTab })(Snapchat);