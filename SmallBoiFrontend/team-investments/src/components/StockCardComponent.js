import React from "react";
import useStyles from "./ComponentStyles";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function StockCardComponent(props){
    var classes = useStyles();
    var mockList=[
        {
            Name:"APL",
            Cost:256
        },
        {
            Name:"ABNB",
            Cost:25.4
        }
    ];
    return (
        <>
        {mockList.map((item) => (
        <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 350,
            height: 200,
          },
        }}
      >
        <Paper elevation={5}>
        <div>{item.Name}</div>
        <div>{item.Cost}</div>
        <Button variant="outlined" className={classes.InvestButton}>Invest</Button>
        </Paper> 
      </Box>
      ))}
      </>
    );
}