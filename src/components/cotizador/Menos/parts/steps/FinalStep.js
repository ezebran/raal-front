export default function FinalStep({step, mercado, formato, material, terminacion, precio ,disenios}){
    return(
        <>
            <div className={`wrap fnl-full ${step !== 5 ? 'd-none' : ''}`}>
                <ul className="fnl-step-content fnl-full">
                    <li className="fnl-step-item">
                        Mercado | <span>{mercado.name}</span>
                    </li>
                    <li className="fnl-step-item">
                        Formato | <span>{formato.name}</span>
                    </li>
                    <li className="fnl-step-item">
                        Material | <span>{material.name}</span>
                    </li>
                    <li className="fnl-step-item">
                        Terminación | <span>{terminacion.name}</span>
                    </li>
                    <li className="fnl-step-item">
                        Cantidad Total | <span>{precio.cantidad}</span>
                    </li>
                    <li className="fnl-step-item">
                        Cantidad de diseños | <span>{disenios}</span>
                    </li>
                </ul>
            </div>
        </>
    )
}