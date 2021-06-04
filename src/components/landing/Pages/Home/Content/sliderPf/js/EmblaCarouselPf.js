import React, { useEffect } from "react";
import { useEmblaCarousel } from "embla-carousel/react";
import { mediaByIndex } from "../media";
import "../css/embla.css";

const EmblaCarouselPf = ({ slides }) => {
  const [viewportRefPf, emblaPf] = useEmblaCarousel({
    align: "start",
    dragFree: true
  });

  return (
    <div className="embla-pf">
      <div className="embla__viewport-pf" ref={viewportRefPf}>
        <div className="embla__container-pf">
          {slides.map((index) => (
            <div className="embla__slide-pf" key={index}>
              <div className="embla__slide__inner-pf">
                <img
                  className="embla__slide__img-pf"
                  src={mediaByIndex(index)}
                  alt="A cool cat."
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarouselPf;
