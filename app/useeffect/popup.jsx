"use client";

import { useEffect, useState } from "react";

export default function PopUp() {
  const [showPopup, setShowPopup] = useState(false); // use state management

  // function that changes the state
  function show() {
    setShowPopup(true);
  }

  // after 6s the show function will run
  useEffect(() => {
    const popup = setInterval(() => {
      show();
    }, 6000);

    // clean up function
    return () => {
      clearInterval(popup);
      console.log("cleanning up");
    };
  }, []);

  return (
    <div className="w-full h-screen">
      <p>PopUp interval</p>
      {/* if its true display this */}
      {showPopup && (
        <div className="fix left-1/2 top-1/2 border">
          <p>This runs after 3s, you can have any information inside me.</p>
          <button onClick={() => setShowPopup(false)}>close</button>
        </div>
      )}
    </div>
  );
}
