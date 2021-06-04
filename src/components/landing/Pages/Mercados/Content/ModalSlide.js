import React,{ useState } from 'react';


export default function ModalSlide({showModal, setShowModal}) {
    
    return (
        <div className={`${showModal ? 'modal-slide' : 'hide'}`}>
            <div className="modal-slide-content">
                
            </div>
        </div>
    );
}