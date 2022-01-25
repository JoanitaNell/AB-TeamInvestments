import React from "react";
import useStyles from "./ComponentStyles";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';


export default function StockCardComponent(props){
    var classes = useStyles();
    return (
        <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 128,
            height: 128,
          },
        }}
      >
        <Paper elevation={3} />
      </Box>
    );
}