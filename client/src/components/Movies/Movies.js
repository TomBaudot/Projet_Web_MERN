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
                <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                    {
                        movies.filter(movie => movie[selectedSearch].includes(filter)).map((movie) => (
                            <Grid key={movie._id} item xs={12} xm={6}>
                                <Movie movie={movie} setCurrentId={setCurrentId}/>
                            </Grid>
                        ))}
                </Grid>
            )
        )
    }
    // Array of string
    if( ['genres','lead_actors'].includes(selectedSearch)){
        return (
            !movies.length ? <CircularProgress/> : (
                <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                    {
                        movies.filter(movie => movie[selectedSearch].join('').includes(filter)).map((movie) => (
                            <Grid key={movie._id} item xs={12} xm={6}>
                                <Movie movie={movie} setCurrentId={setCurrentId}/>
                            </Grid>
                        ))}
                </Grid>
            )
        )
    }

    // Int
    if( ['likeCount','dislikeCount'].includes(selectedSearch)){
        if(filter === ""){
            return (
                !movies.length ? <CircularProgress/> : (
                    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                        {
                            movies.map((movie) => (
                                <Grid key={movie._id} item xs={12} xm={6}>
                                    <Movie movie={movie} setCurrentId={setCurrentId}/>
                                </Grid>
                            ))}
                    </Grid>
                )
            )
        }
        if(filter.includes('>')){
            if(filter.includes('=')){
                filter = parseInt(filter.replace('>','').replace('=','').replace(/\s/g, ''));
                return (
                    !movies.length ? <CircularProgress/> : (
                        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                            {
                                movies.filter(movie => movie[selectedSearch] >= filter).map((movie) => (
                                    <Grid key={movie._id} item xs={12} xm={6}>
                                        <Movie movie={movie} setCurrentId={setCurrentId}/>
                                    </Grid>
                                ))}
                        </Grid>
                    )
                )
            }
            else{
                filter = parseInt(filter.replace('>','').replace(/\s/g, ''));
                return (
                    !movies.length ? <CircularProgress/> : (
                        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                            {
                                movies.filter(movie => movie[selectedSearch] > filter).map((movie) => (
                                    <Grid key={movie._id} item xs={12} xm={6}>
                                        <Movie movie={movie} setCurrentId={setCurrentId}/>
                                    </Grid>
                                ))}
                        </Grid>
                    )
                )
            }
        }
        if(filter.includes('<')){
            if(filter.includes('=')){
                filter = parseInt(filter.replace('<','').replace('=','').replace(/\s/g, ''));
                return (
                    !movies.length ? <CircularProgress/> : (
                        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                            {
                                movies.filter(movie => movie[selectedSearch] <= filter).map((movie) => (
                                    <Grid key={movie._id} item xs={12} xm={6}>
                                        <Movie movie={movie} setCurrentId={setCurrentId}/>
                                    </Grid>
                                ))}
                        </Grid>
                    )
                )
            }
            else{
                filter = parseInt(filter.replace('<','').replace(/\s/g, ''));
                return (
                    !movies.length ? <CircularProgress/> : (
                        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                            {
                                movies.filter(movie => movie[selectedSearch] < filter).map((movie) => (
                                    <Grid key={movie._id} item xs={12} xm={6}>
                                        <Movie movie={movie} setCurrentId={setCurrentId}/>
                                    </Grid>
                                ))}
                        </Grid>
                    )
                )
            }
        }
        else{
            if(filter.includes('=')) filter = parseInt(filter.replace('=','').replace(/\s/g, ''));
            return (
                !movies.length ? <CircularProgress/> : (
                    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                        {
                            movies.filter(movie => movie[selectedSearch] === filter).map((movie) => (
                                <Grid key={movie._id} item xs={12} xm={6}>
                                    <Movie movie={movie} setCurrentId={setCurrentId}/>
                                </Grid>
                            ))}
                    </Grid>
                )
            )
        }
    }
};

export default Movies;