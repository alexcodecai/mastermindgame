import React from "react";
import { Link } from "react-router-dom";
const GameruleScreen = () => {
  return (
    <div>
      <h2>
        Choose four colors in the next available row and then click on the Check
        button The computer will score your guess in the fllowing way. For each
        guess that is right in both color and position you get a black point.
        For each guess that is right in color but not in position you get a red
        point.
      </h2>
      <h3>
        <Link to='/'>Back to Game</Link>
      </h3>
    </div>
  );
};

export default GameruleScreen;
