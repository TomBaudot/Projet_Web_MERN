import React from "react";
import { Grid, CircularProgress} from "@material-ui/core";
import {useSelector} from "react-redux";

import Show from './Show/Show.js';
import useStyles from './styles';


const Shows = ({setCurrentId,filter,selectedSearch}) => {
    const shows = useSelector((state) => state.shows);
    const classes = useStyles();

    //need to be made more beautifull, don't know how yet

    // Simple string
    if( ['title', 'nb_seasons', 'description'].includes(selectedSearch)){
        return (
            !shows.length ? <CircularProgress/> : (
                <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                    {
                        shows.filter(show => show[selectedSearch].includes(filter)).map((show) => (
                            <Grid key={show._id} item xs={12} xm={6}>
                                <Show show={show} setCurrentId={setCurrentId}/>
                            </Grid>
                        ))}
                </Grid>
            )
        )
    }
    // Array of string
    if( ['genres','lead_actors'].includes(selectedSearch)){
        return (
            !shows.length ? <CircularProgress/> : (
                <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                    {
                        shows.filter(show => show[selectedSearch].join('').includes(filter)).map((show) => (
                            <Grid key={show._id} item xs={12} xm={6}>
                                <Show show={show} setCurrentId={setCurrentId}/>
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
                !shows.length ? <CircularProgress/> : (
                    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                        {
                            shows.map((show) => (
                                <Grid key={show._id} item xs={12} xm={6}>
                                    <Show show={show} setCurrentId={setCurrentId}/>
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
                    !shows.length ? <CircularProgress/> : (
                        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                            {
                                shows.filter(show => show[selectedSearch] >= filter).map((show) => (
                                    <Grid key={show._id} item xs={12} xm={6}>
                                        <Show show={show} setCurrentId={setCurrentId}/>
                                    </Grid>
                                ))}
                        </Grid>
                    )
                )
            }
            else{
                filter = parseInt(filter.replace('>','').replace(/\s/g, ''));
                return (
                    !shows.length ? <CircularProgress/> : (
                        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                            {
                                shows.filter(show => show[selectedSearch] > filter).map((show) => (
                                    <Grid key={show._id} item xs={12} xm={6}>
                                        <Show show={show} setCurrentId={setCurrentId}/>
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
                    !shows.length ? <CircularProgress/> : (
                        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                            {
                                shows.filter(show => show[selectedSearch] <= filter).map((show) => (
                                    <Grid key={show._id} item xs={12} xm={6}>
                                        <Show show={show} setCurrentId={setCurrentId}/>
                                    </Grid>
                                ))}
                        </Grid>
                    )
                )
            }
            else{
                filter = parseInt(filter.replace('<','').replace(/\s/g, ''));
                return (
                    !shows.length ? <CircularProgress/> : (
                        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                            {
                                shows.filter(show => show[selectedSearch] < filter).map((show) => (
                                    <Grid key={show._id} item xs={12} xm={6}>
                                        <Show show={show} setCurrentId={setCurrentId}/>
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
                !shows.length ? <CircularProgress/> : (
                    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                        {
                            shows.filter(show => show[selectedSearch] === filter).map((show) => (
                                <Grid key={show._id} item xs={12} xm={6}>
                                    <Show show={show} setCurrentId={setCurrentId}/>
                                </Grid>
                            ))}
                    </Grid>
                )
            )
        }
    }
};

export default Shows;