"use client";

import { useState } from "react";

export default function Like() {
  const [show, setShow] = useState("");

  function showtext() {
    setShow(!show);
  }
  return (
    <div className="text-4xl">
      <button onClick={showtext}>{show ? "💖" : "🤍"}</button>
    </div>
  );
}
