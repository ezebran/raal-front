import React,{ useEffect } from 'react';
import axios from 'axios';

export default function StepOne({step, mercados, setMercados, mercado, setMercado, formatos, setFormatos, formato, setFormato, setMateriales}){

    useEffect( () => {
            axios.get('http://127.0.0.1:8000/api/mercados', {
            })
            .then(res => {
                setMercados(res.data)
            })
            .catch(err => console.error(err))
    }, [])

    const handleChangeMercado = (e) => {
        if(e.target.value != 0){
            setMercado(mercados.filter(merc => merc.id == e.target.value)[0]);
            axios.get(`http://127.0.0.1:8000/api/formatos/${e.target.value}`, {
            })
            .then(res => {
                res.data.unshift({id:0, name: "Selecciona un tipo de envase"})
                setFormatos(res.data)
            })
            .catch(err => console.error(err))
        }
    }

    const handleChangeFormato = (e) => {
        if(e.target.value != 0){
            setFormato(formatos.filter(format => format.id == e.target.value)[0]);

            axios.get(`http://127.0.0.1:8000/api/materiales/${e.target.value}`, {
            })
            .then(res => {
                res.data.unshift({id:0, name: "Selecciona un tipo de material"})
                setMateriales(res.data)
            })
            .catch(err => console.error(err))
        }
    }
    
    return(
        <>
            <div className={`wrap ${step !== 1 ? 'd-none' : ''}`}>
                <div className="select-material">
                    <select  className="select-text" required value={mercado.id} onChange={handleChangeMercado}>
                        <option value="0">Selecione un mercado</option>
                        {
                            mercados.map((mercado) => {
                                return <option value={mercado.id} key={mercado.id}>{ mercado.name}</option>
                            })
                        }
                    </select>
                    <span className="select-highlight"></span>
                    <span className="select-bar"></span>
                    <label className="select-label">Mercado del producto</label>
                </div>
            </div>

            <div className={`wrap ${step !== 1 ? 'd-none' : ''}`}>
                <div className={`select-material ${formatos.length < 1 ? 'select-material-off' : ''}`}>
                    <select className={`select-text ${formatos.length < 1 ? 'off-select' : ''}`} required value={formato.id} onChange={handleChangeFormato}>
                        {
                            formatos.map((formato) => {
                                return <option value={formato.id} key={formato.id}>{ formato.name}</option>
                            })
                        }
                    </select>
                    <span className="select-highlight"></span>
                    <span className="select-bar"></span>
                    <label className="select-label">Tipo de envase</label>
                </div>
            </div>
        </>
    )
}