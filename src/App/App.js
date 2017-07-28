import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom'
require('./styles/mainStyles.scss');

import ActionBar from './components/ActionBar/ActionBar';
import MainContent from './components/MainBody/MainContent'
import Navigation from './components/Navbar/Navigation';

class App extends Component{    

    render(){
        return(
            <BrowserRouter>
            <div>
                <ActionBar/>
                <Navigation/>
                <MainContent/>
            </div>
            </BrowserRouter>
        );
    }
}

export default App;