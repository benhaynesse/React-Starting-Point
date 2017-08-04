import React from 'react';

import {BottomNavigationItem } from 'material-ui/BottomNavigation';

//SVG Imports
import SnapchatIcon from '../Icons/SnapchatIcon';
import InstagramIcon from '../Icons/InstagramIcon';
import FacebookIcon from '../Icons/FacebookIcon';
import TwitterIcon from '../Icons/TwitterIcon';
import HamburgerIcon from '../Icons/HamburgerIcon'


//Const to allow styling of the label
const TabLabel = (props) => {    
    let color = props.selectedIndex === props.id ? '#7BAFE4' : '#FFF';
    return (
        <span style={{ 'color': color, 'transition': 'all 0.8s ease' }}>{props.label}</span>
    )
}


const NavItem = (props) =>  {    
    let iconType;
    switch(props.label){
        case 'Instagram':
            iconType = <InstagramIcon id={props.index} selectedIndex={props.selectedIndex} />
            break;
        case 'Snapchat':
            iconType = <SnapchatIcon id={props.index} selectedIndex={props.selectedIndex} />;
            break;
        case 'Facebook':
            iconType = <FacebookIcon id={props.index} selectedIndex={props.selectedIndex} />;
            break;
        case 'Twitter':
            iconType = <TwitterIcon id={props.index} selectedIndex={props.selectedIndex} />;
            break;
        default:
            iconType = <HamburgerIcon id={props.index} selectedIndex={props.selectedIndex} />;
            break;
    }

    return(
        <BottomNavigationItem
                label={<TabLabel id={props.index} label={props.label} selectedIndex={props.selectedIndex}/>}
                icon={iconType}
                style={{ 'paddingTop': '3px', 'transition': 'all 2s ease' }}
                onTouchTap={() => props.selectIndex(props.index)}
            />
    )
}

export default NavItem;