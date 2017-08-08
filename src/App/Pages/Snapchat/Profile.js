import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';

require('./profile.scss');

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                id: '1',
                first_name: "John",
                last_name: "Doe",
                username: "JohnDoe324",
                age: 22,
                gender: "M",
                imageUrl: "../../../../res/snap-image.png",
                likes: 15,
                tags: ["Snap", "Goon", "add"],
                time_posted: "4",
                headline:"You should add me"
            },
            expanded: props.toggled
        }



        this.handleExpand = this.handleExpand.bind(this);
    }

    handleExpand() {
        this.setState({ expanded: !this.state.expanded })
    }

    componentWillReceiveProps(nextProps) {
        //Check if the state of toggle switch has changed.
        //If it has then adjust the Cards.        
        let { toggled } = nextProps;
        this.setState({ expanded: toggled})

    }


    render() {
        let user = this.state.user;
        return (
            <Card className="card" expanded={this.state.expanded} style={{ 'margin': '5px' }} onExpandChange={this.handleExpand}>
                <CardHeader className="card-header"
                    title={user.first_name}
                    subtitle={user.headline}
                    avatar={user.imageUrl}
                    showExpandableButton={true}
                    style={{ 'border-bottom': this.state.expanded ? '2px solid grey' : 'none' }}
                />
                
                <div style={{'opacity':this.state.expanded ? '1' : 0, height: this.state.expanded ? '100%' : 0,
                transition:'all 0.3s ease-in'}}>
                <CardMedia className="card-media"
                    
                >
                    <div className="card-details">
                        <i className="fa fa-expand user-expand"></i>
                        <img src={user.imageUrl} alt="" />
                        <h4 className="user-username">
                            {user.username}
                        </h4>
                        <h5 className="user-name">
                            {user.first_name + " " + user.last_name}
                        </h5>
                    </div>
                </CardMedia>
                <CardText className="card-info"
                    
                >
                    <h4 className="card-info-likes">
                        {user.likes + " likes"}
                    </h4>
                    <i className="fa fa-heart card-info-like"></i>
                    <h4 className="card-info-tags">
                        {user.tags.map(tag => "#"+tag + " ")}
                    </h4>
                    <h6 className="card-info-time">
                        {user.time_posted + " HOURS AGO"}
                    </h6>
                    
                    
                </CardText>

                </div>
            </Card>
        )
    }
}

export default Profile;