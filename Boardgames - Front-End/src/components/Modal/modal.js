import React from "react";
const Modal = ({id = 'modal', onClose =() => {}, children}) => {
    
    const handleOutsideClick = (e) => {
       if(e.target.id === id) 
            onClose(); 
    }

    return <div id= {id} className="modal" onClick={handleOutsideClick}>
        <div className="modalContainer">
            <button className="botao fecha" onClick={onClose}>X</button>
            <div className="conteudo">{children}</div>
        </div>
    </div>
};

export default Modal;