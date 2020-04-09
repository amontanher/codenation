import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editContato } from '../../store/actions/contatoActions';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaSave } from 'react-icons/fa';

export default function Edit({ history, match }) {
    const { contatos } = useSelector(({ contatos }) => contatos);
    const contactId = match.params.contato_id;
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();

    const updateContact = () => {
        dispatch(editContato({ nome, email }, Number(contactId)));
        history.push('/');
    };

    const style = {
        backgroundColor: '#57DB64',
        color: 'white',
        border: 0,
        borderRadius: 5,
        padding: 5,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none'
    };

    useEffect(() => {
        const contact = contatos[contactId];

        if (!contact) {
            return history.push('/404');
        } else {
            setNome(contact.nome);
            setEmail(contact.email);
        }

    }, [contactId, history, contatos]);

    return (
        <div className="container">
            <div className="header">
                <h1>{nome}</h1>
                <div className="header-actions">
                    <Link className="back-link" to="/"><FaArrowLeft />Return</Link>
                    <Link style={style} to="#" onClick={updateContact} data-test="salvar"><FaSave /> Save Changes</Link>
                </div>
            </div>
            <div className="container-inputs">
                <label>Name</label>
                <input type="text" value={nome} data-test="nome" onChange={e => setNome(e.target.value)} />

                <label>E-mail</label>
                <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    data-test="email"
                />
            </div>
        </div>
    );
}
