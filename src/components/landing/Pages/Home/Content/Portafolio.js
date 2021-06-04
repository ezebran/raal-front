import SliderPf from './sliderPf/js/SliderPf'

export default function Portafolio() {
    return (
      <>
        <section className="portafolio">
            <div className="portafolio-title">
                <h6>Nuestro porfolio</h6>
                <h2>MERCADOS Y/O SEGMENTOS</h2>
            </div>
            <SliderPf />
            <div className="content-btn">
              <a href="#" className="btnh btnh-primary">VER TRABAJOS REALIZADOS</a>
            </div>
        </section>
      </>
    );
}