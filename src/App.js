import React from 'react';
import './App.css';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';

import{Route, Switch} from "react-router-dom";

import Navbar from './components/Navbar'

function App() {
  return ( 
  <>
  <Navbar></Navbar>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/rooms" component={Rooms} />
    <Route exact path="/rooms/:slug" component={SingleRoom} />  
    <Route component={Error} />
  </Switch>
   </> 
   
  );
}

export default App;


// Paused at 1 hr mark
//https://www.youtube.com/watch?v=ScDWrogElmo&list=WL&index=2&t=0s