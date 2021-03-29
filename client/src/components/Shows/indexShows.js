import React, {useState, useEffect} from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import {useDispatch} from "react-redux";
import { DropdownList } from 'react-widgets'

import movies from '../../images/movies.png';
import Shows from '../../components/Shows/Shows.js';
import Form from '../../components/Form/FormShows.js';
import SearchBar from '../../components/SearchBar/SearchBar.js'
import useStyles from './styles';
import { getShows } from "../../actions/shows";

const IndexShows = () => {
    const [currentId, setCurrentId] = useState(0);
    const [searchField, setSearchFiled] = useState('');
    const [selectedSearch, setSelectedSearch] = useState('title');
    const [searchPlaceholder, setSearchPlaceholder] = useState('Search TV Show by Title');
    const [searchFieldValue,setSearchFieldValue] = useState('');
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect( () => {dispatch(getShows());}, [currentId, dispatch]);

    const dopDonwListFunc = (e) => {
        // reformating from the dropdownlist
        let f = e;
        if(e === 'Title') f = 'title';
        if(e === 'Number of seasons') f = 'nb_seasons';
        if(e === 'Runtime') f = 'runtime';
        if(e === 'Network') f = 'network';
        if(e === 'Showrunner') f = 'showrunner';
        if(e === 'Lead actors') f = 'lead_actors';
        if(e === 'Like') f = 'likeCount';
        if(e === 'Dislike') f = 'dislikeCount';
        if(e === 'Description') f = 'description';
        if(e === 'Genres') f = 'genres';
        setSelectedSearch(f);

        let str_before = 'Search show by ';
        if(e !== 'Like' && e !== 'Dislike'){
            setSearchPlaceholder(str_before.concat(e));
        }
        else{
            setSearchPlaceholder(str_before.concat(e).concat(" ( you can use >, < and = )"));
        }
        setSearchFieldValue('');
    };

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Shows</Typography>
                <img className={classes.image} src={movies} alt="icon"/>
            </AppBar>
            <DropdownList data={['Title', 'Number of seasons', 'Runtime,', 'Network', 'Showrunner', 'Description','Genres','Lead actors','Like','Dislike']} onSelect={dopDonwListFunc} defaultValue="Select search parameter"/>
            <SearchBar placeholder={searchPlaceholder} handleInputChange={(e) => {setSearchFiled(e.target.value);setSearchFieldValue(e.target.value)}} fieldValue={searchFieldValue}/>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Shows setCurrentId={setCurrentId} filter={searchField} selectedSearch={selectedSearch}/>
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

export default IndexShows;