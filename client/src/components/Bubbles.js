import React from "react";
import bubbles from "../util/bubbles";

const Bubbles = () => {
  return (
    <div className="row bubbles">
      {bubbles.map((bubble) => {
        const { theme } = bubble;
        return <span className="bubble">{theme}</span>;
      })}
    </div>
  );
};

export default Bubbles;
