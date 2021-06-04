import lata from './../../../../static/lata.png';
import axios from 'axios';
import React,{ useEffect, useState } from 'react';

export default function Result({precioFinal, disenios, precio ,setPrecioFinal, step}) {

  const [dolarOficial, setDolarOficial] = useState([]);

  useEffect( () => {
    axios.get('https://api-dolar-argentina.herokuapp.com/api/dolaroficial', {
    })
    .then(res => {
      setDolarOficial(res.data)
    })
    .catch(err => console.error(err))
  }, [])

  if(disenios > 1){    
    setPrecioFinal( (((((disenios-1)*5)/100)*precio.base)+precio.base)*precio.cantidad )
  }else{
    setPrecioFinal( precio.base*precio.cantidad )
  }

  return (
        <div className="steps-results">
          <img src={lata} alt="lata" className={`${step == 5 ? 'achicado' : ''}`} />
          <h2 className={`${step !== 5 ? 'd-none' : ''}`}>ARS $ {precioFinal}</h2>
          <div className={`result-foot ${step !== 5 ? 'd-none' : ''}`}>
            <button className="btn btn-primary btn-margin" >
                Me interesa
            </button>
            <button className="btn btn-gray btn-margin">
                No me interesa
            </button>
          </div>
        </div>
    );
}