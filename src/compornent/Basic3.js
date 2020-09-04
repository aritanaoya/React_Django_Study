import React, { useState, useEffect } from "react";

const Basic3 = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState("");

  useEffect(() => {
    console.log("use effect");
  });
  return (
    <div>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        {" "}
        Click: {count}
      </button>
      <input
        type="text"
        value={item}
        onChange={evt => setItem(evt.target.value)}
      />
    </div>
  );
};

export default Basic3;
