import React, { useState } from "react";
import bubbles from "../util/bubbles";


const Bubbles = (props) => {
  const [selections, setSelections] = useState([]);

  const handleSelection = (theme) => {
    console.log(selections);
    if (selections.includes(theme)) {
      setSelections([]);
      props.updateChoice(null);
      return;
    }
    setSelections([theme]);
    props.updateChoice(theme);
  }

  return (
    <div className="row bubbles">
      {bubbles.map((bubble) => {
        const { theme, selected } = bubble;
        if (selections.includes(theme)) {
          console.log("theme is true", theme);
          return <span style={{ color: "red" }} onClick={() => handleSelection(theme)} className="bubble">{theme}</span>
        };
        return <span onClick={() => handleSelection(theme)} className="bubble">{theme}</span>;
      })}
    </div>
  );
};

export default Bubbles;
