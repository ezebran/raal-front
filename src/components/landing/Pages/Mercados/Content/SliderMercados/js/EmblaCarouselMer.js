import React, { useState, useEffect, useCallback } from "react";
import { DotButtonMer, PrevButtonMer, NextButtonMer } from "./EmblaCarouselButtons";
import { useEmblaCarousel } from "embla-carousel/react";
import { mediaByIndex } from "../media";
import "../css/embla.css";

const EmblaCarouselMer = ({ slides }) => {
  const [viewportRefMer, emblaMer] = useEmblaCarousel({ 
    skipSnaps: false
});
  const [prevBtnEnabledMer, setPrevBtnEnabledMer] = useState(false);
  const [nextBtnEnabledMer, setNextBtnEnabledMer] = useState(false);
  const [selectedIndexMer, setSelectedIndexMer] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => emblaMer && emblaMer.scrollPrev(), [emblaMer]);
  const scrollNext = useCallback(() => emblaMer && emblaMer.scrollNext(), [emblaMer]);
  const scrollTo = useCallback((index) => emblaMer && emblaMer.scrollTo(index), [
    emblaMer
  ]);

  const onSelect = useCallback(() => {
    if (!emblaMer) return;
    setSelectedIndexMer(emblaMer.selectedScrollSnap());
    setPrevBtnEnabledMer(emblaMer.canScrollPrev());
    setNextBtnEnabledMer(emblaMer.canScrollNext());
  }, [emblaMer, setSelectedIndexMer]);

  useEffect(() => {
    if (!emblaMer) return;
    onSelect();
    setScrollSnaps(emblaMer.scrollSnapList());
    emblaMer.on("select", onSelect);
  }, [emblaMer, setScrollSnaps, onSelect]);

  return (
    <>
      <div className="emblaMer">
        <div className="embla__viewportMer" ref={viewportRefMer}>
          <div className="embla__containerMer">
            {slides.map((index) => (
              <div className="embla__slideMer" key={index}>
                <div className="embla__slide__innerMer">
                  <img
                    className="embla__slide__imgMer"
                    src={mediaByIndex(index)}
                    alt="A cool cat."
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <PrevButtonMer onClick={scrollPrev} enabled={prevBtnEnabledMer} />
        <NextButtonMer onClick={scrollNext} enabled={nextBtnEnabledMer} />
      </div>
      <div className="embla__dotsMer">
        {scrollSnaps.map((_, index) => (
          <DotButtonMer
            key={index}
            selected={index === selectedIndexMer}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </>
  );
};

export default EmblaCarouselMer;
