"use client";

import { useState } from "react";

export default function Showtext() {
  const [show, setShow] = useState(false);

  function showtext() {
    setShow(!show);
  }
  return (
    <div className="text-4xl">
      <button onClick={showtext}>Show text</button>

      {show == true ? <p>my name is Rex</p> : <p></p>}
    </div>
  );
}
