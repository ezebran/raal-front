import EmblaCarouselPf from "./EmblaCarouselPf";
import "../css/base.css";

const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());

export default function SliderPf  (){
  return(
    <main className="main-pf">

      <EmblaCarouselPf slides={slides} />

    </main>
  );
}



