import React from "react";
const ModalDelete = ({id = 'modalDelete', onClose =() => {},  children}) => {
    
    const handleOutsideClick = (e) => {
       if(e.target.id === id) 
            onClose(); 
    }

    return <div id= {id} className="modalDelete" onClick={handleOutsideClick}>
        <div className="modalContainer">
            <h2>Deletar Boardgame Cadastrado</h2>
            <button className="fecha" onClick={onClose}>X</button>   
            <span> Tem certeza que deseja deletar este cadastro?</span>
            <br></br>
            <span> Aperte sim para confirmar e não para voltar à tabela</span>
            <br></br>
            <span>A deleção é permanente no banco de dados <b>Cuidado!</b></span>
            <div>
                <button className="botao fechar" onClick={onClose}>NÃO</button>
                {children}
            </div>
        </div>
    </div>
};

export default ModalDelete;