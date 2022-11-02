import React from 'react';
import './firstpage.css';
import {Link} from 'react-router-dom';

function FirstPage() {
  return (
    <div className="firstpage-container">
    <h1>scrabmled words</h1>
     <div id="rules">
     <p className="lead">rules of game</p>
     <p>good luck</p>
       </div>
       <Link to="/play">
         <button id="play-btn" className="button-49">play</button>
         </Link>
      </div>
  )
}




export default FirstPage;