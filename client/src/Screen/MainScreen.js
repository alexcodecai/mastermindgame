import React from "react";
import { Link } from "react-router-dom";
//import Board from "../components/Board";
import { Game } from "../components/game";
const MainScreen = () => {
  return (
    <div className='container'>
      <header className='title'>
        <h1>MasterMind Game</h1>
        <div>
          <Link to='/rule'>Game Rule </Link>
        </div>
      </header>
      <div className='maincontent'>
        <Game />
      </div>
    </div>
  );
};

export default MainScreen;
