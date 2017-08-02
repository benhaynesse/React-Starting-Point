import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome'

import { connect } from 'react-redux';

import Menu from './SlideInMenu';

require('./snapchat.scss');

class Snapchat extends Component{
    constructor(props) {
        super(props);
        this.state = ({
            user: {
                "id": '1',
                "first_name" : "John",
                "last_name" : "Doe",
                "username": "JohnDoe324",
                "age": 22,
                "gender": "M",
                "imageUrl": "https://dfwn148cvdexl.cloudfront.net/wp-content/uploads/2015/06/snapcode-300x300.png",
                "likes" : 15,
                "tags" : ["Snap", "Goon", "add"],
                "time_posted" : "4"
            },
            likedUsers:[]
              

        })
    }    

    likeUser(id){
        console.log(id);
        let userState = this.state.user;
        userState.likes = userState.likes+1;
        let likeArray = this.state.likedUsers;
        likeArray.push(id);
        this.setState({user:userState,likedUsers:likeArray})
    }

    render(){        
        let user = this.state.user;
        let heartClass = this.state.likedUsers.find(i => i == 1) ? "red" : "white";
        let listClass = this.props.show ? {'opacity':0.15} : {'opacity':1};
        return(
            <div>
            <Menu show={this.props.show}/>
            <div className="user-list"  style={listClass}>                  
            <div className="user-profile">
                <div className="user-details">
                    <FontAwesome name="expand"/>
                    <img className="user-image" src={user.imageUrl}/>
                    <h4>{user.username}</h4>
                    <h6>{user.first_name + " " + user.last_name}</h6>
                </div>
                <div className="user-info">
                    <h5>{user.likes} likes</h5>
                    <FontAwesome style={{color:heartClass}} name="heart" onClick={this.likeUser.bind(this, user.id)}/>
                    <ul className="tags">
                        <li>#Snap</li>
                        <li>#Goon</li>
                        <li>#add</li>                        
                    </ul>
                    <h6>{user.time_posted + " HOURS AGO"}</h6>
                </div>
            </div>
            <div className="user-profile">
                <div className="user-details">
                    <FontAwesome name="expand"/>
                    <img className="user-image" src={user.imageUrl}/>
                    <h4>{user.username}</h4>
                    <h6>{user.first_name + " " + user.last_name}</h6>
                </div>
                <div className="user-info">
                    <h5>{user.likes} likes</h5>
                    <FontAwesome name="heart"/>
                    <ul className="tags">
                        <li>#Snap</li>
                        <li>#Goon</li>
                        <li>#add</li>
                    </ul>
                    <h6>{user.time_posted + " HOURS AGO"}</h6>
                </div>
            </div>
            </div>
            </div>
        )
    }
}

function mapStateToProps(store){    
    return {show:store.showFilter}
}

export default connect(mapStateToProps,null)(Snapchat);