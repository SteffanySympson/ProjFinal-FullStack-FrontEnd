import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Api from '../../api/Api';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import './View.css';

const View = (props) => {
    const _id = props.match.params.id;
    const [tarefa, setTarefa] = useState({});
    const [open, setOpen] = useState(false);

    const onopenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    useEffect(() => {

        async function getTarefaById() {
            const response = await Api.fetchGetById(_id);
            const result = await response.json();
            setTarefa(result);
        }
        getTarefaById();
    }, [_id]);

    

    const handleDelete = async (evento) => {
        evento.preventDefault();
        const response = await Api.fetchDelete(_id);
        const result = await response.json();
        console.log(result.message);
        props.history.push('/');
    }

    return(
        <>
            <div className="tudo">
                <div className='card'>
                    <div className='div-titulo'>
                        <h3>{tarefa.nomeTarefa}</h3>
                    </div>
                    <div className='div-descricao'>
                        <p>{tarefa.descricaoTarefa}</p>
                    </div>
                    <div className='div-descricao'>
                        <p>{tarefa.prioridadeTarefa}</p>
                    </div>
                    <div className='div-descricao'>
                        <p>{tarefa.statusTarefa}</p>
                    </div>
                    <div className='div-descricao'>
                        <p>{tarefa.dataCriacaoTarefa}</p>
                    </div>
                    <div className='div-btn'>
                        <Link to={`/Edit/${tarefa._id}`} className='btn-editar' type="button" value="Edit">Editar</Link>
                        <button className='btn-apagar' onClick={onopenModal}>Apagar</button>
                        <Link to={`/`} className='btn-editar' type="button" value="Home">Voltar</Link>
                    </div>
                </div>
                <Modal open={open} onClose={onCloseModal} center>
                    <h2 className="h2modal">Excluir?</h2>
                        <button class="btnnao" onClick={onCloseModal}>Não</button>
                        <button class="btnsim" onClick={handleDelete}>Sim</button>
                </Modal>
            </div>
        </>
    );
}
export default View;