import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import Mercado from './Mercado';
import ModalSlide from './ModalSlide';
import SliderMercados from './SliderMercados/js/SliderMercados';

export default function ListMercados() {

    const [showModal, setShowModal] = useState(false);
    const [mercados, setMercados] = useState([]);

    useEffect( () => {
        axios.get('http://127.0.0.1:8000/api/mercadosSegmentados', {
        })
        .then(res => {
            setMercados(res.data)
        })
        .catch(err => console.error(err))
    }, [])

    const handleClickModal = (e) => {
        e.preventDefault();
        setShowModal(!showModal)
    }

    return (
        <>
            <section className="mercados-content">
                <h3 className="line-title"><hr></hr>Mercados</h3>
                
                <div className="mercados-list">
                {
                    mercados.map((merca)=>{
                        
                         return<Mercado showModal={showModal} setShowModal={setShowModal} merca={merca} key={merca.id}/>
                    })
                }
                    
                </div>
                
            </section>
            <div className={`${showModal ? 'modal-slide' : 'hide'}`}>
                <div className="modal-slide-content">
                    <div className="close-modal" onClick={handleClickModal}>X</div>
                    <SliderMercados />
                </div>
            </div>
            {/* <ModalSlide showModal={showModal} setShowModal={setShowModal}/> */}
        </>
    );
}

