import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom'
require('./styles/mainStyles.scss');

import MainContent from './components/MainContent'
import Navigation from './components/Navigation'

class App extends Component{    

    render(){
        return(
            <BrowserRouter>
            <div>
                <Navigation/>
                <MainContent/>
            </div>
            </BrowserRouter>
        );
    }
}

export default App;