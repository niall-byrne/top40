import React from 'react';
import './App.css';
import Tile from './components/tile/tile.js'

function App() {
  return (
    <div className="parent">
      <div className="wrapper">
        <div className="section one"><Tile></Tile></div>
        <div className="section two">CloseUp</div>
        <div className="section three">Top40</div>
      </div>
    </div>
  );
}

export default App;
