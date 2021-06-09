import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Homepage from './Homepage'
import Signupfan from './Signupfan'
import Signuptalent from './Signuptalent';
import {
    BrowserRouter, Route
  } from "react-router-dom";

class App extends React.Component {

    render() {
        return (
            <div className='container col-sm-12 col-lg-6'>
                <BrowserRouter>
                    <Route path='/' exact component={Homepage} />
                    <Route path='/fan' exact component={Signupfan} />
                    <Route path='/talent' exact component={Signuptalent} />
                </BrowserRouter>
            </div>
        )
    }
}

export default App;