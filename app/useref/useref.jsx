"use client";

import { useRef, useState } from "react";

export default function Useref() {
  const [count, setCount] = useState(0); // use state

  //use ref
  const inputref = useRef(null);
  const inputRef = () => {
    inputref.current.focus();
  };

  // const (name) = useRef(initalvalue)

  const countRef = useRef(0);

  const increase = () => {
    countRef.current = countRef.current + 1;
    console.log("current count:", countRef.current);
  };

  console.log(countRef);
  return (
    <div>
      <input ref={inputref} type="text" placeholder="Type something" />
      <button onClick={inputRef}>focus input</button>
      <br />
      <br />
      <br />

      <p>use ref count</p>

      <button onClick={increase}>increse</button>
      <p>{countRef.current}</p>

      <br />

      <p>usestate: {count}</p>

      <button onClick={() => setCount((c) => c + 1)}>add</button>
    </div>
  );
}
