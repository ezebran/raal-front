import React,{ useState } from 'react';
import StepOne from './steps/StepOne';
import StepTwo from './steps/StepTwo';
import StepThree from './steps/StepThree';
import StepFour from './steps/StepFour';
import FinalStep from './steps/FinalStep';

export default function Steps({mercado, setMercado, formato, setFormato, 
    material, setMaterial, terminacion, setTerminacion, precio, setPrecio
    ,disenios, setDisenios, nombre, setNombre, email, setEmail, telefono, setTelefono, step, setStep}) {

    
    const [mercados, setMercados] = useState([]);
    const [formatos, setFormatos] = useState([]);
    const [materiales, setMateriales] = useState([]);
    const [terminaciones, setTerminaciones] = useState([]);  
    const [precios, setPrecios] = useState([]);
    const [stepThree, setStepThree] = useState(false);

    const btnSiguiente = (e) => {
        if(step == 1 && materiales.length > 0){
            setStep(step < 5 ? step + 1 : step);
        }else if (step == 2 && precios.length > 0){
            setStep(step < 5 ? step + 1 : step);
        }else if(step == 3 && stepThree){
            setStep(step < 5 ? step + 1 : step);
        }else if(step == 4 && nombre && email && telefono){
            setStep(step < 5 ? step + 1 : step);
        }
        
        e.preventDefault();
    }

    const btnVolver = (e) => {
        setStep(step > 1 ? step - 1 : step);
        e.preventDefault();
    }

    return (
        <div className="steps-content">
            <div className="head-step">
                <h4>{
                step === 1 ? '1. Producto' :
                step === 2 ? '2. Material' :
                step === 3 ? '3. Impresión' :
                step === 4 ? '4. Datos de contacto' :
                'Detalle Cotización'}</h4>
            </div>
            <div className={`steps-form ${step == 5 ? 'p-0' : ''}`} >

                <div className={`selects-content ${step == 5 ? 'fnl-full' : ''}`} >

                    <StepOne 
                        step={step}
                        mercados={mercados}
                        setMercados={setMercados}
                        mercado={mercado}
                        setMercado={setMercado}
                        formatos={formatos}
                        setFormatos={setFormatos}
                        formato={formato}
                        setFormato={setFormato}
                        setMateriales={setMateriales}
                    />
                    <StepTwo
                        step={step}
                        materiales={materiales}
                        material={material}
                        setMaterial={setMaterial}
                        terminaciones={terminaciones}
                        setTerminaciones={setTerminaciones}
                        terminacion={terminacion}
                        setTerminacion={setTerminacion}
                        setPrecios={setPrecios}
                        
                    />
                    <StepThree
                        step={step}
                        precios={precios}
                        setPrecio={setPrecio}
                        precio={precio}
                        disenios={disenios}
                        setDisenios={setDisenios}
                        setStepThree={setStepThree}
                    />
                    <StepFour
                        step={step}
                        nombre={nombre}
                        setNombre={setNombre}
                        email={email}
                        setEmail={setEmail}
                        telefono={telefono}
                        setTelefono={setTelefono}
                    />
                    <FinalStep 
                        step={step}
                        mercado={mercado}
                        formato={formato}
                        material={material}
                        terminacion={terminacion}
                        precio={precio}
                        disenios={disenios}
                        nombre={nombre}
                        email={email} 
                        telefono={telefono}
                    />
                </div>

                <div className={`foot-steps ${step === 5 ? 'd-none' : ''}`}>
                    <button className="btn btn-gray btn-margin" onClick={btnVolver}>
                        Volver
                    </button>
                    <button className={`btn btn-primary btn-margin ${step === 4 ? 'd-none' : ''}`} onClick={btnSiguiente}>
                        Siguiente
                    </button>
                    <button className={`btn btn-primary btn-margin ${step !== 4 ? 'd-none' : ''}`} onClick={btnSiguiente}>
                        Cotizar
                    </button>
                </div>
            </div>
        </div>
    );
}