import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

require('./navbar.scss')


class Navigation extends Component {

    render() {
        return (

            <ul className="navbar">
                <div className="tabs">
                    <li id="snapTab"><NavLink to="snap"></NavLink></li>
                    <li id="instaTab"><NavLink to="insta"></NavLink></li>
                    <li id="faceTab"><NavLink to="face"></NavLink></li>
                    <li id="twitterTab"><NavLink to="twitter"></NavLink></li>
                    <li id="menuTab"><NavLink to="menu"></NavLink></li>
                </div>
            </ul>

        )
    }


}


export default Navigation;