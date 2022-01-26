import React,{useState,useEffect} from "react";
import useStyles from "./ComponentStyles";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function InvestmentCardComponent(props){
    var classes = useStyles();
    var [resultData, setResultData]= useState([
        {
            T:"APL",
            C:256
        },
        {
            T:"ABNB",
            C:25.4
        }
    ]);

    useEffect(() => {
        /**load recommendations */
        fetch("https://bigboibackend20220125131300.azurewebsites.net/getCurrentInvestments")
          .then(res => res.json())
          .then(
            (result) => {
              console.log(result);
              setResultData(result);
            },
          )
      })

    return (
        <div className={classes.NextTo}>
        {resultData.map((item) => (
            
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
        <div className={classes.StockName} >{item.t}</div>
        </div>
        <div className={classes.NextTo}>
            Cost :
        <div className={classes.StockName} >{item.c}</div>
        </div>
      
        </Paper> 
      </Box>
      ))}
      </div>
    );
}