import axios from 'axios';

export default function StepTwo({step, materiales, material, setMaterial, terminaciones, setTerminaciones, terminacion, setTerminacion, setPrecios}){

    const handleChangeMaterial = (e) => {
        if(e.target.value != 0){
            setMaterial(materiales.filter(mat => mat.id == e.target.value)[0]);
            axios.get(`http://127.0.0.1:8000/api/terminaciones/${e.target.value}`, {
            })
            .then(res => {
                res.data.unshift({id:0, name: "Selecciona un tipo de terminación"})
                setTerminaciones(res.data)
            })
            .catch(err => console.error(err))
        }
    }

    const handleChangeTerminacion = (e) => {
        if(e.target.value != 0){
            setTerminacion(terminaciones.filter(termi => termi.id == e.target.value)[0]);
            axios.get(`http://127.0.0.1:8000/api/precios/${e.target.value}`, {
            })
            .then(res => {
                res.data.unshift({id:0, cantidad: "Selecciona un tipo de cantidad"})
                setPrecios(res.data)
            })
            .catch(err => console.error(err))
        }
    }

    return(
        <>
            <div className={`wrap ${step !== 2 ? 'd-none' : ''}`}>
                <div className="select-material">
                    <select className="select-text" required  value={material.id} onChange={handleChangeMaterial}>
                        {
                            materiales.map((material) => {
                                return <option value={material.id} key={material.id}>{ material.name}</option>
                            })
                        }
                    </select>
                    <span className="select-highlight"></span>
                    <span className="select-bar"></span>
                    <label className="select-label">Material de la etiqueta</label>
                </div>
            </div>

            <div className={`wrap ${step !== 2 ? 'd-none' : ''}`}>
                <div className={`select-material ${terminaciones.length < 1 ? 'select-material-off' : ''}`}>
                    <select className={`select-text ${terminaciones.length < 1 ? 'off-select' : ''}`} required value={terminacion.id} onChange={handleChangeTerminacion}>
                    
                        {
                            terminaciones.map((terminacion) => {
                                return <option value={terminacion.id} key={terminacion.id}>{ terminacion.name}</option>
                            })
                        }
                    </select>
                    <span className="select-highlight"></span>
                    <span className="select-bar"></span>
                    <label className="select-label">Terminación</label>
                </div>
            </div>
        </>
    )
}