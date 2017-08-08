import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';

import SvgIcon from 'material-ui/SvgIcon';
import ContentAdd from 'material-ui/svg-icons/content/add';
import AutoComplete from 'material-ui/AutoComplete';

import MenuDraw from './Drawers/MenuDraw';
import AddDraw from './Drawers/AddDraw';



require('./actionbar.scss');

const CloseIcon = (props) => (
    <svg fill={props.color} height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        <path d="M0 0h24v24H0z" fill="none" />
    </svg>
)

//Redo It or wrap it in div that set its to be fixed at the top.

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

        let FAB = <FloatingActionButton style={{'gridColumn':3, 'alignSelf':'center', 'width':'100%'}} mini onTouchTap={this.toggleAdd}>
            <ContentAdd style={{'alignSelf':'center'}} />
        </FloatingActionButton>;


        let appBarTitleStyle = {'textAlign':'center'};
        let appBarStyle = {'display': 'grid', 'gridTemplateColumns':'40px 1fr 40px', 'gridTemplateRows':'100%','box-shadow':'rgb(63, 181, 202) 0px 1px 10px'}

        return (
            <div>
                <AppBar style={appBarStyle}
                    titleStyle={appBarTitleStyle}
                    onLeftIconButtonTouchTap={this.toggleNav}
                    title={"LOGO"}
                >
                
                {FAB}
                









                </AppBar>











                <MenuDraw
                    open={this.state.openNav}
                    onRequestChange={this.toggleNav}
                    closeIcon={<CloseIcon color={'#FFF'} />}
                />



                <AddDraw
                    open={this.state.openAdd}
                    onRequestChange={this.toggleAdd}
                    slideRight
                    closeIcon={<CloseIcon color={'#FFF'} />}
                />


            </div>
        )

    }
}

export default Actionbar;