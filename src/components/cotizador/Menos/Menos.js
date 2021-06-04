import React,{ useState } from 'react';
import Steps from './parts/Steps';
import Result from './parts/Result';
import checkImg from './../../../static/check.png';

export default function Menos() {

  const [mercado, setMercado] = useState([]);
  const [formato, setFormato] = useState([]);
  const [material, setMaterial] = useState([]);
  const [terminacion, setTerminacion] = useState([]);
  const [precio, setPrecio] = useState([{cantidad: 1000}]);
  const [disenios, setDisenios] = useState(1);
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [step, setStep] = useState(1);
  const [precioFinal, setPrecioFinal] = useState(0);

    return (
      <div className="cotizador-steps">
        <Steps
          mercado={mercado}
          setMercado={setMercado}
          formato={formato}
          setFormato={setFormato}
          material={material}
          setMaterial={setMaterial}
          terminacion={terminacion}
          setTerminacion={setTerminacion}
          precio={precio}
          setPrecio={setPrecio}
          disenios={disenios}
          setDisenios={setDisenios}
          nombre={nombre}
          setNombre={setNombre}
          email={email} 
          setEmail={setEmail}
          telefono={telefono}
          setTelefono={setTelefono}
          step={step}
          setStep={setStep}
        />
        <Result 
          precioFinal={precioFinal}
          disenios={disenios}
          precio={precio}
          setPrecioFinal={setPrecioFinal}
          step={step}
        />
        <div className={`${step == 5 ? 'entrega-info' : 'd-none'}`}>
          <ul className="entrega__list">
            <li>
              <img src={checkImg} alt="checkImg" /> 
              Plazo de entrega 15 días desde la confirmación y la recepción del pago
            </li>
            <li>
              <img src={checkImg} alt="checkImg" /> 
              El precio se fija en dolares estadounidenses por millar de etiquetas.
            </li>
            <li>
              <img src={checkImg} alt="checkImg" /> 
              Tomar tipo de cambio vendedor anterior al dia de la transferencia.
            </li>
            <li>
              <img src={checkImg} alt="checkImg" /> 
              Las cantidades a entregar podran variar en relacion a las cantidades solicitadas en un más menos 20%.
            </li>
            <li>
              <img src={checkImg} alt="checkImg" /> 
              Impresión digital HP indigo ( link a pagina de hp)
            </li>
          </ul>
        </div>
      </div>
    );
}







