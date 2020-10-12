import React from 'react';
import  { useEffect, useState } from 'react';
import One from "./One";
import Two from "./Two"
import './App.css';
import {BrowserRouter as Router , Switch , Route } from "react-router-dom"
import ReactGa from 'react-ga';


function App() {

  useEffect(()=>{
    ReactGa.initialize('UA-180321409-1')

    ReactGa.pageview(window.location.path + window.location.search)

  },[])

  return (
    <div className="App">
      <header className="App-header">
        <a href="/One">One</a>
        <br/>
        <a href="/Two">two</a>
        Hello
        <Router>
          <Switch>
            <Route path="/One"><One/></Route>
            <Route path="/Two"><Two/></Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
