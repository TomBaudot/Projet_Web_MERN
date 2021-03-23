import React from "react";

import useStyles from './styles.js';


const SearchBar = (props) => {

    const classes = useStyles();

    return(
        <form className={classes.searchbar} >
            <input type="text" placeholder={props.placeholder} onChange={props.handleInputChange}/>
        </form>
    )
};

export default SearchBar;