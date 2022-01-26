import './App.css';
import useStyles from "./AppStyle";

import StockCardComponent from './components/StockCardComponent';
import HeaderComponent from './components/HeaderComponent';
import InvestmentCardComponent from './components/InvestmentCardComponent';
function App() {
  var classes = useStyles();

  return (
    <div className={classes.ParentContainer}>
      <HeaderComponent/>
      <StockCardComponent/>
      current investments
      <InvestmentCardComponent/>
    </div>
  );
}

export default App;
