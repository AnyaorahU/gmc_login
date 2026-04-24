"use client";

import { useState } from "react";

export default function BgChange() {
  const [show, setShow] = useState(false);

  function showtext() {
    setShow(!show);
  }
  return (
    <div
      className={`text-4xl h-screen w-full ${show ? "bg-red-500" : "bg-blue-500"}`}
    >
      <button onClick={showtext}>Background Change</button>
    </div>
  );
}
