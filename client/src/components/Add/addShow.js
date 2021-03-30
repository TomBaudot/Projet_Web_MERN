import React, {useState, useEffect} from "react";
import { Container, Grid } from '@material-ui/core';
import {useDispatch} from "react-redux";

import Form from '../Form/FormShows.js';
import useStyles from './styles';
import { getShows } from "../../actions/shows.js";


const AddShow = () => {
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(0);
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));


    useEffect( () => {dispatch(getShows());}, [currentId, dispatch]);


    return (
        <Container maxWidth="lg">
            { user?.result?.admin && (
                <div className={classes.mainContainer}>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </div>
            )}
        </Container>
    );
}

export default AddShow;