"use client";

import { useRef, useState } from "react";

// variable of our images, we put our image inside an array
const images = ["image1.webp", "image2.jpg", "image3.jpeg", "image4.jpg"];

export default function ProjectRef() {
  const imageRef = useRef(0); //use refrence
  const [, setRender] = useState(0); // use state

  // to move to the next slide
  const nextslide = () => {
    imageRef.current = (imageRef.current + 1) % images.length;
    setRender((r) => r + 1);
  };

  const prevslide = () => {
    imageRef.current = (imageRef.current - 1 + images.length) % images.length;
    setRender((r) => r + 1);
  };

  return (
    <div className="relative w-full p-10 flex flex-col items-center justify-center">
      <h1 className="text-center text-4xl font-bold mb-5">picture slider</h1>
      <div className="w-140 bg-blue-300 h-80">
        <img
          src={images[imageRef.current]}
          alt="hero image"
          className="w-full h-full bg-cover bg-center"
        />
      </div>

      <div className="absolute top-0 left-0 w-full flex justify-between h-full px-20">
        <button onClick={prevslide}>prev</button>
        <button onClick={nextslide}>next</button>
      </div>
      <p>slide: {imageRef.current}</p>
    </div>
  );
}
