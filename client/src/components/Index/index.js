import React from "react";
import { CoolCardLink, CoolCardImage, CoolCardText } from "react-cool-card";
import {MDBContainer, MDBRow, MDBCol} from "mdbreact";
import useStyles from './styles';

import backMovie from '../../images/backmovie.jpg';
import backShow from '../../images/backshow.jpg'


const Index = () => {
    const classes = useStyles();

    return(
        <MDBContainer className={classes.container}>
            <MDBRow>
                <MDBCol middle='true'>
                    <CoolCardLink target="_self" href="movies">
                        <CoolCardImage src={backMovie} alt="sample" />
                        <CoolCardText
                            title="Movies"
                            description="Discover and search for movies"
                        />
                    </CoolCardLink>
                </MDBCol>
                <MDBCol middle='true'>
                    <CoolCardLink target="_self" href="shows">
                        <CoolCardImage src={backShow} alt="sample" />
                        <CoolCardText
                            title="Shows"
                            description="Discover and search for series"
                        />
                    </CoolCardLink>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
};

export default Index;