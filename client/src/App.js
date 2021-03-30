import React from "react";
import { Container } from '@material-ui/core';

import Index from './components/Index/index.js'
import IndexMovies from './components/Movies/indexMovies.js'
import { Router, Route } from "react-router";
import { createBrowserHistory } from 'history'
import Auth from "./components/Auth/Auth";
import Navbar from "./components/Navbar/Navbar";
import Add from './components/Add/Add';


const App = () => {


    const history = createBrowserHistory();

    return (
        <Router history={history}>
            <Container maxWidth="lg">
                <Navbar />
                <Route exact path="/" component={Index} />
                <Route path="/auth" component={Auth} />
                <Route exact path="/movies" component={IndexMovies} />
                <Route path="/movies/add" component={Add} />
            </Container>
        </Router>

    );
}
export default App;