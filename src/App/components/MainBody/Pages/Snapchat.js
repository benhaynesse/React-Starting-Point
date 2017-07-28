import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getUsers} from '../../..//actions/snapchat'


class Snapchat extends Component{

    componentDidMount(){
        this.props.getUsers();
    }

    render(){
        const userlist = this.props.users.map(user => {
                return(
                    <li key={user.id}>
                        {user.username}
                    </li>
                );
            })           

        return(            
            <div>{userlist}</div>            
        )
    }


}


function mapStateToProps(store){
    return {users:store.snapchat}
}

export default connect(mapStateToProps,{getUsers})(Snapchat);