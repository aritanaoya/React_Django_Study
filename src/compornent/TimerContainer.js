import React, { useState, useEffect } from "react";
import Timer from "./Timer";

const TimerContainer = () => {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Switch Timer</button>
      {/* 論理積 */}
      {display && <Timer />}
    </div>
  );
};

export default TimerContainer;
