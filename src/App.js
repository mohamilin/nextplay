import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HeaderComponents from './components/HeaderComponents';
import HomePage from './pages/Homepage';
import DetailMovie from './pages/DetailMovie';
import ComingSoon from './pages/ComingSoon';
import Home from './pages/Home';
function App() {
  return (
    <div className="App">
     <Router>
     <HeaderComponents/>
     <Switch>
       <Route exact path='/'>
       <Home/>
       </Route>
       <Route path='/now-playing'>
         <HomePage/>
       </Route>
       <Route path='/upcoming'>
         <ComingSoon/>
       </Route>
       <Route path='/detail-movie/:id'>
         <DetailMovie/>
       </Route>
     </Switch>
     </Router>
    </div>
  );
}

export default App;
