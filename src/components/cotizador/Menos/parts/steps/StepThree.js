export default function StepThree({step, precios, setPrecio, precio, disenios, setDisenios, setStepThree}){

    const handleChangeCantidad = (e) => {
        setPrecio(precios.filter(cantidad => cantidad.id == e.target.value)[0]);
        setStepThree(true);
    }

    const handleChangeDisenios = (e) => {
        setDisenios(e.target.value);
    }

    return(
        <>
            <div className={`wrap ${step !== 3 ? 'd-none' : ''}`}>
                <div className="select-material">
                    <select className="select-text" required value={precio.id} onChange={handleChangeCantidad}>
                        {
                            precios.map((cantidad) => {
                                return <option value={cantidad.id} key={cantidad.id}>{ cantidad.cantidad}</option>
                            })
                        }
                    </select>
                    <span className="select-highlight"></span>
                    <span className="select-bar"></span>
                    <label className="select-label">Cantidad a imprimir</label>
                </div>
            </div>

            <div className={`wrap ${step !== 3 ? 'd-none' : ''}`}>
                <div className="select-material">
                    <select className="select-text" required value={disenios} onChange={handleChangeDisenios}>
                        <option value="" disabled defaultValue></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    <span className="select-highlight"></span>
                    <span className="select-bar"></span>
                    <label className="select-label">Cantidad de diseños bajo el mismo tamaño de etiqueta</label>
                </div>
            </div>

        </>
    )
}