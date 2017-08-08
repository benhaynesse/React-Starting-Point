import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'

import { BottomNavigation } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';

import NavItem from './NavItem';
import {INSTAGRAM_TAB_ID, SNAPCHAT_TAB_ID, FACEBOOK_TAB_ID, TWITTER_TAB_ID} from '../../constants/index';

require('./bottomnav.scss');

class BottomNavigationExampleSimple extends Component {

    constructor() {
        super();
        this.tabs = [
            {"label":"Instagram", "id":INSTAGRAM_TAB_ID},
            {"label":"Snapchat", "id":SNAPCHAT_TAB_ID},
            {"label":"Facebook", "id":FACEBOOK_TAB_ID},
            {"label":"Twitter", "id":TWITTER_TAB_ID},
            {"label":"Search", id:-5}
        ]        

    }

    componentDidMount(){
        this.selectIndex(this.props.selectedIndex);
    }    

    selectIndex(index) {
        this.setState({ selectedIndex: index })
    }

    render() {

        let tabs = this.tabs.map((tab, index) => 
            <NavLink key={"nv"+index} style={{'textAlign':'center'}} to={tab.label}>
            <NavItem
                label={tab.label}
                index={tab.id}
                selectIndex={(i) => this.selectIndex(i)}
                selectedIndex={this.props.selectedIndex}
            />
            </NavLink>
        )

        return (
            <div className="navbar-bottom">
                <BottomNavigation style={{ 'background': '#262228' }} selectedIndex={this.props.selectedIndex}>
                    {tabs}
                </BottomNavigation>
            </div>
        )
    }
}

function mapStateToProps(store){    
    return {selectedIndex:store.navbar}
}

export default connect(mapStateToProps,null)(BottomNavigationExampleSimple);