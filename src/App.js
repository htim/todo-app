import React, {Component} from 'react';
import {HomePage} from './components/HomePage/index';
import {store} from "./store/index"
import './App.css';
import {BrowserRouter, Route} from "react-router-dom"
import {Provider} from "react-redux";
import ConnectedHomePage from "./containers/ConnectedHomePage/ConnectedHomePage";


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div className="App">
                        <Route exact path="/" component={ConnectedHomePage}/>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
