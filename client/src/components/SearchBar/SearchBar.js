import React from "react";

import useStyles from './styles';


const SearchBar = () => {

    const classes = useStyles();

    return(
        <div>
        <form>
            <input type="text" placeholder="Search movies" onChange={onChange} className={classes.mainContainer}/>
        </form>
        </div>
    )
};

export default SearchBar;