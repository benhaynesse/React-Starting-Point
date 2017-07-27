import React, {Component} from 'react';
import {Route}  from 'react-router-dom';

import Snapchat from './Snapchat';
import Dummy from './Dummy';


class MainContent extends Component{


    render(){
        return(
            <div>
                <Route exact path="/" component={Dummy}/>
                <Route path="/snap" component={Snapchat}/>
                
            </div>
        )
    }
}


export default MainContent;