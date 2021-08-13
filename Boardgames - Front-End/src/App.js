import { useState, useEffect } from "react";
import "./App.scss";
import Modal from "./components/Modal/modal";
import ModalDelete from "./components/ModalDelete/modalDelete";
//import TabelaBG from "./components/TabelaBG";
const URL_BASE = "http://localhost:5000";


export default function Home(){
    const [BGs, setBGs] = useState([]);
    const [nomeBG, setNomeBG] = useState("");
    const [imagemUrlBG, setImagemUrlBG] = useState("");
    const [estiloBG, setEstiloBG] = useState("");
    const [maxJogsBG, setMaxJogsBG] = useState("");
    const [editando, setEditando] = useState(false);
    const [idEditando, setIdEditando] = useState(null);
    const [modal, setModal] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);
    
    const loadBGs = async() => {
      const res = await fetch(`${URL_BASE}/boardgames`);
      const data = await res.json();
      setBGs(data);
    }

    useEffect(() => {
      loadBGs();
    }, []);

    useEffect(() => {
      if(idEditando !== null && editando){
        const bg = BGs.find((bg) => bg._id === idEditando);
        setNomeBG(bg.nome);
        setImagemUrlBG(bg.imagemUrl);
        setEstiloBG(bg.estilo);
        setMaxJogsBG(bg.maxJogs);
      }
    },[idEditando]);

    const onSubmit = async (e) => {
      e.preventDefault();
      if (editando){
        await fetch(`${URL_BASE}/boardgames/${idEditando}`,
          {
            method : "PUT",
            headers : {"Content-Type" : "application/json",},
            body : JSON.stringify({
              nome: nomeBG,
              imagemUrl: imagemUrlBG,
              estilo: estiloBG,
              maxJogs: maxJogsBG,
            }),
          }
        );
        setEditando(false);
        setIdEditando(null);
      }else{
        await fetch(`${URL_BASE}/boardgames`,
          {
            method : "POST",
            headers: {"Content-Type" :"application/json",
            },
            body : JSON.stringify({
              nome: nomeBG,
              imagemUrl: imagemUrlBG,
              estilo: estiloBG,
              maxJogs: maxJogsBG,
            }),
          }
        );
      }

      loadBGs();
      resetaModal();
      resetaModalDelete();
    };

    const deletar = async (id) =>{
      await fetch(`${URL_BASE}/boardgames/${id}`,
        {
          method : "DELETE",
        });
        loadBGs();
        resetaModal();
        resetaModalDelete();
    };

    const resetaModal = async() =>{
      setModal(false);
      setEditando(false);
      setIdEditando(null);
      setNomeBG("");
      setImagemUrlBG("");
      setEstiloBG("");
      setMaxJogsBG("");
    }
    
    const resetaModalDelete = async() =>{
      setModalDelete(false);
      setEditando(false);
      setIdEditando(null);
      setNomeBG("");
      setImagemUrlBG("");
      setEstiloBG("");
      setMaxJogsBG("");
    }

    return( 
      <div className="container">
        <header>
          <p className = "tituloDaPag">Biblioteca de Boardgames</p>
          <div className="btn-wrapper-criar">
            <button className="botao criar" onClick={() => setModal(true)}>Criar Novo Registro</button>
          {modal ? (<Modal onClose={() => resetaModal()}>
            <span className="titulo">Cadastro de Boardgame</span>
            <form onSubmit={onSubmit}>
            <span className="campo">Nome do Boardgame: </span>
            <input
            placeholder="Nome"
            value={nomeBG}
            onChange={(e) => {
              setNomeBG(e.target.value);
            }}
            />
            <br />
            <span className="campo">Endereço da Imagem: </span>
            <input
            placeholder="Url da Imagem"
            value={imagemUrlBG}
            onChange={(e) => {
              setImagemUrlBG(e.target.value);
            }}
            title="Url de uma imagem da capa do jogo, preferivelmente do boardgamegeek"
            />
            <br />
            <span className="campo">Estilo do Jogo: </span>
            <input
            placeholder="Estilo"
            value={estiloBG}
            onChange={(e) => {
              setEstiloBG(e.target.value);
            }}
            title="Estilo da gameplay do jogo"
            />
            <br />
            <span className="campo">Máximo de Jogadores:</span>
            <input
            placeholder="Máximo de Jogadores"
            value={maxJogsBG}
            onChange={(e) => {
              setMaxJogsBG(e.target.value);
            }}
            />
            <br />
            <button type="submit" className="botao salvar">Salvar</button> 
          </form>
          </Modal>):null}
        </div>
        </header>
        <main className="main">
        
          <div className="tabela-wrapper">
            <table className="tabela-bg">
            <thead>
                <tr>
                    <th>
                        <span className="coluna-imagem">
                        Capa
                        </span>
                    </th>
                    <th>
                        <span className="coluna-nome">
                        Nome
                        </span>
                    </th>
                    <th>
                        <span className="coluna-estilo">
                        Estilo
                        </span>
                    </th>
                    <th>
                        <span className="coluna-jogadores">
                        N° Players
                        </span>
                    </th>
                    <th className="coluna-botoes">
                        Ações
                    </th>
                </tr>
            </thead>
            <tbody>
                {BGs.map((bg) => (
                    <tr key={bg._id}>
                        <td className="capaBG">
                            <img src={bg.imagemUrl} alt={bg.nome} className="capa"></img>
                        </td>
                        <td className="coluna-nome">{bg.nome}</td>
                        <td className="coluna-estilo">{bg.estilo}</td>
                        <td className="coluna-jogadores">{bg.maxJogs}</td>
                        <td className = "btn-wrapper">
                            <button className = "botao edit" onClick={() =>{
                                setModal(true);
                                setIdEditando(bg._id);
                                setEditando(true);
                            }}>Editar</button>
                            <button className = "botao delete" onClick={()=> setModalDelete(true)}>
                              Deletar
                            </button>
                            {modalDelete ? (<ModalDelete onClose={() =>resetaModalDelete()}>
                              <div>
                                <button className = "botao deletar" onClick={() =>{deletar(bg._id)}}>
                                SIM
                              </button></div>
                            </ModalDelete>
                             
                            ):null} 
                        </td>
                    </tr>
                ))
                }
            </tbody>
        </table>
        </div>
        </main>
      </div>
    ); 
}