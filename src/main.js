// This Is the entry point for webpack. Keep it simple

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import App from './App/App';



class Main extends Component{
    render(){
        return (<App/>);
    }
}

ReactDOM.render(<Main/>, document.getElementById("app"));