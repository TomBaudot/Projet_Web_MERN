import React from "react";
import { Container } from '@material-ui/core';

import Index from './components/Index/index.js'
import IndexMovies from './components/Movies/indexMovies.js'
import { Router, Route } from "react-router";
import { createBrowserHistory } from 'history'
import Auth from "./components/Auth/Auth";
import Navbar from "./components/Navbar/Navbar";


const App = () => {


const history = createBrowserHistory();

return (
        <Router history={history}>
            <Container maxWidth="lg">
                <Navbar />
                <Route exact path="/" component={Index} />
                <Route path="/auth" component={Auth} />
                <Route path="/movies" component={IndexMovies} />
                </Container>
        </Router>
    
    );
}
export default App;