import React from "react";
import useStyles from "./ComponentStyles";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function StockCardComponent(props){
    var classes = useStyles();
    var mockList=[
        {
            T:"APL",
            C:256
        },
        {
            T:"ABNB",
            C:25.4
        }
    ];
    return (
        <div className={classes.NextTo}>
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
            <div className={classes.NextTo}>
            Ticker :
        <div className={classes.StockName} >{item.T}</div>
        </div>
        <div className={classes.NextTo}>
            Cost :
        <div className={classes.StockName} >{item.C}</div>
        </div>
        <div className={classes.NextTo}>
        <Button variant="outlined" className={classes.InvestButton}>Invest</Button>
        </div>
        </Paper> 
      </Box>
      ))}
      </div>
    );
}