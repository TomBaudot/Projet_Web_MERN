import React from "react";
import { Container } from '@material-ui/core';

import Index from './components/Index/index.js'
import IndexMovies from './components/Movies/indexMovies.js'
import IndexShows from './components/Shows/indexShows.js'
import { Router, Route } from "react-router";
import { createBrowserHistory } from 'history'
import Auth from "./components/Auth/Auth";
import Navbar from "./components/Navbar/Navbar";
import Add from './components/Add/Add';
import AddShow from './components/Add/addShow'


const App = () => {


    const history = createBrowserHistory();

    return (
        <Router history={history}>
            <Container maxWidth="lg">
                <Navbar />
                <Route exact path="/" component={Index} />
                <Route path="/auth" component={Auth} />
                <Route path="/shows" component={IndexShows} />
                <Route exact path="/movies" component={IndexMovies} />
                <Route path="/movies/add" component={Add} />
                <Route path="/shows/add" component={AddShow} />
            </Container>
        </Router>

    );
}
export default App;