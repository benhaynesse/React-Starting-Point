import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'


import { BottomNavigation } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';

import NavItem from './NavItem';

require('./bottomnav.scss');

class BottomNavigationExampleSimple extends Component {

    constructor() {
        super();
        

        //Array With Label and SVG component
        this.tabs = [
            "Instagram", "Snapchat", "Facebook", "Twitter", "Menu"
        ]

    }

    componentDidMount(){
        this.selectIndex(this.props.selectedIndex);
    }    

    selectIndex(index) {
        this.setState({ selectedIndex: index })
    }

    render() {

        let tabs = this.tabs.map((label, index) => 
            <NavLink style={{'textAlign':'center'}} to={label}>
            <NavItem
                label={label}
                index={index}
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
    console.log(store);
    return {selectedIndex:store.navbar}
}

export default connect(mapStateToProps)(BottomNavigationExampleSimple);