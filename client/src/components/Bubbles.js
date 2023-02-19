import React from "react";
import bubbles from "../util/bubbles";

const Bubbles = (props) => {
  return (
    <div className="row bubbles">
      {bubbles.map((bubble) => {
        const { theme } = bubble;
        return <span onClick={() => props.updateChoice(theme)} className="bubble">{theme}</span>;
      })}
    </div>
  );
};

export default Bubbles;
