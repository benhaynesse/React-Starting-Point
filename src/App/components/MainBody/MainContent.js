import React, {Component} from 'react';
import {Route}  from 'react-router-dom';

import Snapchat from './Pages/Snapchat';
import Insta from './Pages/Insta';
import Facebook from './Pages/Facebook';
import Twitter from './Pages/Twitter';


require('./maincontent.scss')
class MainContent extends Component{


    render(){
        return(
            <div className="mainContent">
                <Route exact path="/" component={Snapchat}/>               
                <Route path="/snap" component={Snapchat}/> 
                <Route path="/insta" component={Insta} /> 
                <Route path="/face" component={Facebook}/>  
                <Route path="/twitter"  component={Twitter}/>         
            </div>
        )
    }
}


export default MainContent;