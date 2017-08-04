import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom';

//Component Imports
import Navbar from './components/Navbar/BottomNavgation';

//Import For Router
import Snapchat from './Pages/Snapchat/Snapchat';
import Instagram from './Pages/Instagram/Instagram';
import Facebook from './Pages/Facebook/Facebook';
import Twitter from './Pages/Twitter/Twitter';
import NotFoundPage from './Pages/404/404NotFound';

require('./styles/mainStyles.scss');


const MainBody = () => {
    return (
        <Switch>
            <Route exact path="/" component={Snapchat} />
            <Route path="/snapchat" component={Snapchat} />
            <Route path="/instagram" component={Instagram} />
            <Route path="/facebook" component={Facebook} />
            <Route path="/twitter" component={Twitter} />             
            <Route path="*" component={NotFoundPage}/>            
        </Switch>
    )
}

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="app">
                    <MainBody />
                    <Navbar />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;