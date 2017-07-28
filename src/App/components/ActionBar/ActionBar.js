import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome'
require('./actionbar.scss');

class ActionBar extends Component {



    render() {
        return (
            <div className="actionbar">
                <div className="items">
                    <button>Filter</button>
                    <input type="text" />
                    <FontAwesome
                        name="plus-square"  
                        className="addProfile"  
                        size="2x"                                           
                        style={{color:'white'}}
                    />
                </div>

            </div>
        )
    }
}

export default ActionBar;