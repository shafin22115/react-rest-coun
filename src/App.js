
import './App.css';
import Home from './Component/Home/Home';
import NoMatch from './Component/NoMatch/NoMatch';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CountryDetail from './Component/CountryDetail/CountryDetail';
import Header from './Component/Header/Header';

function App() {
  return (
    <div>
     
     <Router>
       <Header></Header>
       <Switch>
      
         <Route path='/Home'>
         <Home></Home>
         </Route>
         <Route path="/country/:CountryName">
           <CountryDetail></CountryDetail>
         </Route>
         <Route exact path="/">
         <Home></Home>
         </Route>
         <Route path="*">
           <NoMatch></NoMatch>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
