"use client"; // it allows specify that what we are doing in this file is for frontend

import { useEffect, useState } from "react"; // importing the use state

export default function Count() {
  // function of count
  const [count, setCount] = useState(0);

  //add function
  function add() {
    setCount((c) => c + 1); //arrow function
  }
  // subtraction function
  function subtraction() {
    setCount((c) => c - 1);
  }

  //useEffect(function, [dependencies])

  useEffect(() => {
    console.log("component rendered");
    add();
    subtraction();
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={add} className="p-2 bg-green-500 ">
        add button
      </button>
      <button onClick={subtraction} className="p-2 bg-red-500 ">
        Subtraction button
      </button>
    </div>
  );
}
