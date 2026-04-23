"use client";

import { useState } from "react";

export default function PopUp() {
  const [jide, setJide] = useState(false);

  function show() {
    setJide(true);
  }

  return (
    <div className="flex justify-center items-center">
      <button onClick={show} className="text-3xl">
        open
      </button>

      {jide === true ? (
        <div className="h-100 w-100 bg-red-500"></div>
      ) : (
        <div className="h-100 w-100 bg-green-500"></div>
      )}
    </div>
  );
}
