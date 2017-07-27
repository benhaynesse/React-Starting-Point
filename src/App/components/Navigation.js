import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
class Navigation extends Component {

    render() {
        return (
            <nav className="navbar">                
                <ul>
                    <li><NavLink to="snap">Snap</NavLink></li>
                    <li><NavLink to="/">Dummy</NavLink></li>
                </ul>
            </nav>
        )
    }


}


export default Navigation;