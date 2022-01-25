import './App.css';
import useStyles from "./AppStyle";

import StockCardComponent from './components/StockCardComponent';
import HeaderComponent from './components/HeaderComponent';

function App() {
  var classes = useStyles();

  return (
    <div className={classes.ParentContainer}>
      <HeaderComponent/>
      <StockCardComponent/>
    </div>
  );
}

export default App;
