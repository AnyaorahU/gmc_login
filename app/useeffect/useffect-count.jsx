"use client";

import { useEffect, useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);

  function increament() {
    const result = setCount((count) => count + 1);
    console.log(result);
  }
  function decreament() {
    const result = setCount((count) => count - 1);
    console.log(result);
  }

  useEffect(() => {
    increament();
    decreament();
  }, []);

  return (
    <div>
      <div className="text-4xl">
        <button onClick={decreament}>decreament</button>
        <p>{count}</p>
        <button onClick={increament}>increament</button>
      </div>
    </div>
  );
}
