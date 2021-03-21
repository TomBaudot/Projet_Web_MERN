import React from "react";
import { Container, AppBar, Typography } from '@material-ui/core';

import movies from './images/movies.png';
import useStyles from './styles';
import Index from './components/Index/index.js'
import IndexMovies from './components/Movies/indexMovies.js'
import { Router, Route } from "react-router";
import { createBrowserHistory } from 'history'

const App = () => {

    const classes = useStyles();

const history = createBrowserHistory();

return (
    <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
            <Typography className={classes.heading} variant="h2" align="center">The Big Project</Typography>
            <img className={classes.image} src={movies} alt="icon" height="60"/>
        </AppBar>
        <Router history={history}>
            <Route exact path="/" component={Index} />
            <Route path="/movies" component={IndexMovies} />
        </Router>
    </Container>
    );
}
export default App;