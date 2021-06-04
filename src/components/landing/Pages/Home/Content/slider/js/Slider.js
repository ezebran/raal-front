import React from "react";
import EmblaCarousel from "./EmblaCarousel";



export default function Slider() {
  const SLIDE_COUNT = 5;
  const slides = Array.from(Array(SLIDE_COUNT).keys());

  return(
    <>
      <div className="slider-container">
        <EmblaCarousel slides={slides} />
      </div>
    </>
  )
};