"use client";

import { useEffect, useState } from "react";

// setTimeout, setinterval
// setInterval(() => {
//     console.log("run interval")
// }, 5000); // ms 1s = 1000ms

//setinterval(function, time of interval)
// 5000 = 5s

export default function IntervalExample() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("running...");
    }, 4000);

    return () => {
      clearInterval(timer);
      console.log("stop running");
    };
  }, []);

  setTimeout(() => {
    console.log("run once");
  }, 2000);
  return <div></div>;
}
