import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import 'antd/dist/antd.css';
import './App.css';
import Home from './pages/Home';
import Loans from './pages/Loans';
import Insurance from './pages/Insurance';
import MemberSignup from './pages/MemberSignup';
import {ABOUT, HELP, HOME, INSURANCE, LOANS, SIGN_UP} from './helpers/constants'
import Help from './pages/Help';
import AboutUs from './pages/AboutUs';


function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path={HOME} component={Home}/>
                    <Route path={LOANS} component={Loans}/>
                    <Route path={INSURANCE} component={Insurance}/>
                    <Route path={HELP} component={Help}/>
                    <Route path={ABOUT} component={AboutUs}/>
                    <Route path={SIGN_UP} component={MemberSignup}/>
                </Switch>

            </Router>
        </div>
    );
}

export default App;
