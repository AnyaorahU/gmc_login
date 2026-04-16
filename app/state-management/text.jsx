"use client";

import { useState } from "react";

export default function Message() {
  const [text, setText] = useState("");
  const [displayText, setDisplayText] = useState([]);

  function handleChange(e) {
    setText(e.target.value);
  }

  function result() {
    setDisplayText([...displayText, text]);
    // setDisplayText(text)
    setText("");
  }
  return (
    <div className="p-4 w-100 h-50 mx-auto mt-10 border rounded-2xl">
      <input
        type="text"
        placeholder="Yor name"
        value={text}
        name="name"
        className="p-2 border w-full"
        onChange={handleChange}
      />

      <button onClick={result} className="">
        Show Text
      </button>

      {/* <p className="text-lg text-center ">{displayText}</p> */}

      {displayText.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}
