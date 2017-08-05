import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom';

//Component Imports
import Navbar from './components/Navbar/BottomNavgation';
import Appbar from './components/ActionBar/Actionbar';

//Import For Router
import Snapchat from './Pages/Snapchat/Snapchat';
import Instagram from './Pages/Instagram/Instagram';
import Facebook from './Pages/Facebook/Facebook';
import Twitter from './Pages/Twitter/Twitter';
import NotFoundPage from './Pages/404/404NotFound';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6


require('./styles/mainStyles.scss');
require('./styles/fadein.scss');



const MainBody = () => (


    <Route render={({ location }) => (
        <ReactCSSTransitionGroup
            transitionName="slideLeft"
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={800}>
            <Route location={location} key={location.key}>
                <Switch>
                    <Route exact path="/" component={Snapchat} />
                    <Route path="/snapchat" component={Snapchat} />
                    <Route path="/instagram" component={Instagram} />
                    <Route path="/facebook" component={Facebook} />
                    <Route path="/twitter" component={Twitter} />
                    <Route path="*" component={NotFoundPage} />
                </Switch>
            </Route>
        </ReactCSSTransitionGroup>
    )} />
)





class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="app">
                    <Appbar />
                    <MainBody />
                    <Navbar />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;