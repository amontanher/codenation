import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContato } from '../../store/actions/contatoActions';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import Button from '../../components/Button'

export default function Create() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const createContact = () => {
    const contato = { nome: nome, email: email };
    console.log(contato);
    dispatch(addContato(contato));
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Novo contato</h1>
        <Link className="back-link" to="/"><FaArrowLeft /> Voltar</Link>
        <Button title="Criar Contato" icon="FaSave" color="#57DB64" />
      </div>
      {/* <label>Nome</label>
      <input type="text" value={nome} onChange={e => setNome(e.target.value)} />

      <label>E-mail</label>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <button onClick={createContact}>Criar Contato</button> */}
    </div>
  );
}
