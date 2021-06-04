import EmblaCarouselMer from "./EmblaCarouselMer";
import "../css/base.css";
import "../css/reset.css";


const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());

export default function SliderMercados(){
  return(
    <EmblaCarouselMer slides={slides} />
  );
}

