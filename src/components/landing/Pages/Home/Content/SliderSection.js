import React from 'react'
import { useEmblaCarousel } from "embla-carousel/react"
import Slider from './slider/js/Slider'
import dolar from './../../../../../static/dolar-icon.svg'
import { Link } from "react-router-dom"

export default function SliderSection() {
  const [emblaRef] = useEmblaCarousel();

  return (
    <>
      <section className="slider-section">
          <div className="slider-info">
            <img src={dolar} alt="dolar" />
            <h6>SISTEMA DIGITAL</h6>
            <h2>Cotizá online tu <br></br> proyecto</h2>
            
            <Link to="/cotizador" className="btnh btnh-primary">Cotizar</Link>
          </div>

          <Slider />
      </section>
    </>
  );
}
