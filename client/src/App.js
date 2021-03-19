import React, {useState, useEffect} from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import {useDispatch} from "react-redux";

import movies from './images/movies.png';
import Movies from './components/Movies/Movies.js';
import Form from './components/Form/Form.js';
import SearchBar from './components/SearchBar/SearchBar.js'
import useStyles from './styles';
import { getMovies } from "./actions/movies.js";

const App = () => {
    const [currentId, setCurrentId] = useState(0);
    const [searchField, setSearchFiled] = useState('');
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect( () => {dispatch(getMovies());}, [currentId, dispatch]);

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Movies</Typography>
                <img className={classes.image} src={movies} alt="icon" height="60"/>
            </AppBar>
            <SearchBar placeholder="Search movie" handleInputChange={(e) => setSearchFiled(e.target.value)}/>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Movies setCurrentId={setCurrentId} filter={searchField}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;