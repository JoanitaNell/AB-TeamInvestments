import React from "react";
import useStyles from "./ComponentStyles";


export default function HeaderComponent(props){
    var classes = useStyles();

    return (
        <div className={classes.HeaderComponentStyle}>
            Team Investments
        </div>
    );
}