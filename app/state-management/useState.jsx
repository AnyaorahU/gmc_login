"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function increament() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="w-100 mx-auto bg-black mt-30 p-6 rounded-2xl h-50">
      <p className="text-5xl text-center text-blue-500">{count}</p>

      <div className="flex justify-center gap-10 mt-4">
        <button
          onClick={decrement}
          className="p-2 cursor-pointer  text-2xl text-white bg-green-500 rounded-2xl px-5 font-bold"
        >
          -
        </button>
        <button
          onClick={decrement}
          className="p-2 cursor-pointer  text-2xl text-white bg-gray-500 rounded-2xl px-5 font-bold"
        >
          Reset
        </button>

        <button
          onClick={increament}
          className="p-2 cursor-pointer text-white text-2xl bg-red-500 rounded-2xl px-5 font-bold"
        >
          +
        </button>
      </div>
    </div>
  );
}
