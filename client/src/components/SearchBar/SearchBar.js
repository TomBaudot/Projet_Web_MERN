import React from "react";

// import useStyles from './styles.js';
import { MDBContainer,MDBRow,MDBInput   } from "mdbreact";

const SearchBar = (props) => {

    // const classes = useStyles();

    return(
        <div className="md-form md-outline">
            <MDBInput label={props.placeholder} type="text" onChange={props.handleInputChange} outline={true} background icon="search"  size="lg"/>
        </div>
    )
};

export default SearchBar;