import React from 'react';
// import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import './App.css';
import {FoodItems, DrinkItems} from "./Pages";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<FoodItems />} />
          <Route path="/drinkitems" element={<DrinkItems />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
