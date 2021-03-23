import React from "react";
import { Grid, CircularProgress} from "@material-ui/core";
import {useSelector} from "react-redux";

import Movie from './Movie/Movie.js';
import useStyles from './styles';


const Movies = ({setCurrentId,filter,selectedSearch}) => {
    const movies = useSelector((state) => state.movies);
    const classes = useStyles();

    //need to be made more beautifull, don't know how yet

    // Simple string
    if( ['title', 'director', 'release_date', 'description'].includes(selectedSearch)){
        return (
            !movies.length ? <CircularProgress/> : (
                <grid className={classes.container} container alignItems="stretch" spacing={3}>
                    {
                        movies.filter(movie => movie[selectedSearch].includes(filter)).map((movie) => (
                            <Grid key={movie._id} item xs={12} xm={6}>
                                <Movie movie={movie} setCurrentId={setCurrentId}/>
                            </Grid>
                        ))}
                </grid>
            )
        )
    }
    // Array of string
    if( ['genres','lead_actors'].includes(selectedSearch)){
        if(filter === ""){
            return (
                !movies.length ? <CircularProgress/> : (
                    <grid className={classes.container} container alignItems="stretch" spacing={3}>
                        {
                            movies.map((movie) => (
                                <Grid key={movie._id} item xs={12} xm={6}>
                                    <Movie movie={movie} setCurrentId={setCurrentId}/>
                                </Grid>
                            ))}
                    </grid>
                )
            )
        }
        return (
            !movies.length ? <CircularProgress/> : (
                <grid className={classes.container} container alignItems="stretch" spacing={3}>
                    {
                        movies.filter(movie => movie[selectedSearch].includes(filter)).map((movie) => (
                            <Grid key={movie._id} item xs={12} xm={6}>
                                <Movie movie={movie} setCurrentId={setCurrentId}/>
                            </Grid>
                        ))}
                </grid>
            )
        )
    }

    // Int
    if( ['likeCount','dislikeCount'].includes(selectedSearch)){
        if(filter === ""){
            return (
                !movies.length ? <CircularProgress/> : (
                    <grid className={classes.container} container alignItems="stretch" spacing={3}>
                        {
                            movies.map((movie) => (
                                <Grid key={movie._id} item xs={12} xm={6}>
                                    <Movie movie={movie} setCurrentId={setCurrentId}/>
                                </Grid>
                            ))}
                    </grid>
                )
            )
        }
        return (
            !movies.length ? <CircularProgress/> : (
                <grid className={classes.container} container alignItems="stretch" spacing={3}>
                    {
                        movies.filter(movie => movie[selectedSearch] === parseInt(filter)).map((movie) => (
                            <Grid key={movie._id} item xs={12} xm={6}>
                                <Movie movie={movie} setCurrentId={setCurrentId}/>
                            </Grid>
                        ))}
                </grid>
            )
        )
    }
};

export default Movies;