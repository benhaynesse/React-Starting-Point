import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';

import SvgIcon from 'material-ui/SvgIcon';
import ContentAdd from 'material-ui/svg-icons/content/add';

require('./actionbar.scss');

const CloseIcon = (props) => (
    <svg fill={props.color} height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        <path d="M0 0h24v24H0z" fill="none" />
    </svg>
)



import FloatingActionButton from 'material-ui/FloatingActionButton';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
class Actionbar extends Component {

    constructor() {
        super();
        this.state = { openNav: false, openAdd: false }

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleAdd = this.toggleAdd.bind(this);
    }

    toggleNav() {
        let currentState = this.state.openNav;
        this.setState({ openNav: !currentState });
    }

    toggleAdd() {
        let currentState = this.state.openAdd;
        this.setState({ openAdd: !currentState });    
    }

    render() {
        return (
            <div>
                <AppBar
                    onLeftIconButtonTouchTap={this.toggleNav}
                    iconElementRight={
                        <FloatingActionButton mini onTouchTap={this.toggleAdd}>
                            <ContentAdd />
                        </FloatingActionButton>}
                >

                </AppBar>
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.openNav}
                    onRequestChange={this.toggleNav}
                >                
                    <FloatingActionButton mini style={{ 'float': 'right' }} onTouchTap={this.toggleNav}>
                        <CloseIcon color={'#FFF'} />
                    </FloatingActionButton>
                </Drawer>

                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.openAdd}
                    openSecondary={true}
                    onRequestChange={this.toggleAdd}
                >
                    <FloatingActionButton mini style={{ 'float': 'right' }} onTouchTap={this.toggleAdd}>
                        <CloseIcon color={'#FFF'} />
                    </FloatingActionButton>
                </Drawer>
            </div>
        )

    }
}

export default Actionbar;