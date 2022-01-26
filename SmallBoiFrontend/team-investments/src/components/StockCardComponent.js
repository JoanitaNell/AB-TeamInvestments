import React,{useState,useEffect} from "react";
import useStyles from "./ComponentStyles";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function StockCardComponent(props){
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
        fetch("https://bigboibackend20220125131300.azurewebsites.net/investments")
          .then(res => res.json())
          .then(
            (result) => {
              console.log(result);
              setResultData(result);
            },
          )
      }, [])

    return (
        <div className={classes.NextTo}>
        {resultData.map((item) => (
            
        <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 250,
            height: 150,
          },
        }}
      >
        <Paper elevation={5}>
            <div className={classes.NextToStockCard}>
            Ticker :
        <div className={classes.StockName} >{item.t}</div>
        </div>
        <div className={classes.NextTo}>
            Cost :
        <div className={classes.StockName} >{item.c}</div>
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