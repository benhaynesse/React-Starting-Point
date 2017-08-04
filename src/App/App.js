import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom'
import {Route}  from 'react-router-dom';




//Component Imports


//Import For Router
import Snapchat from './Pages/Snapchat/Snapchat';
import Instagram from './Pages/Instagram/Instagram';
import Facebook from './Pages/Facebook/Facebook';
import Twitter from './Pages/Twitter/Twitter';

require('./styles/mainStyles.scss');


const MainBody = () => {
    return(
        <div>
                <Route exact path="/" component={Snapchat}/>               
                <Route path="/snapchat" component={Snapchat}/>
                <Route path="/instagram" component={Instagram}/>        
                <Route path="/facebook" component={Facebook}/>      
                <Route path="/twitter" component={Twitter}/>                            
        </div>
    )
}

class App extends Component{    

    render(){
        return(     
            
            
            <BrowserRouter>
            <div className="app">                     
                <div className="grid"><MainBody/></div>                
            </div>
            </BrowserRouter>
            
        );
    }
}

export default App;