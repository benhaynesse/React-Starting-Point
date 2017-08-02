import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome'
import { connect } from 'react-redux';
import { showFilter } from '../../actions/filter';


require('./actionbar.scss');


import FilterButton from '../Buttons/DefaultButton';

class ActionBar extends Component {

    

    handleFilter(){
        this.props.showFilter(this.props.show);
    }

    render() {        
        return (
            <nav className="actionbar">
                <div className="items">
                    <FilterButton onClick={this.handleFilter.bind(this)}
                    class={"defaultButton"} label={"Filter"}/>
                    <div className="searchBar">
                        <FontAwesome name="search"/>
                        <input type="search" placeholder="Search..." />
                    </div>                    
                    <FontAwesome
                        name="plus"  
                        className="addProfile"  
                        size="lg"
                    />
                </div>

            </nav>
        )
    }
}

function mapStateToProps(store){    
    return {show:store.showFilter}
}

export default connect(mapStateToProps,{showFilter})(ActionBar);