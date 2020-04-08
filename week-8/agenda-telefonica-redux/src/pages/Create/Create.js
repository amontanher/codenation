import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContato } from '../../store/actions/contatoActions';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaSave } from 'react-icons/fa';

export default function Create() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const createContact = () => {
    // const contato = { nome: nome, email: email };
    // console.log(contato);
    // dispatch(addContato(contato));
    console.log("teste");
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

  return (
    <div className="container">
      <div className="header">
        <h1>Novo contato</h1>
        <Link className="back-link" to="/"><FaArrowLeft /> Voltar</Link>
        <Link style={style} to="#" onClick={createContact}><FaSave /> Criar Contato</Link>
      </div>
      <div className="container-inputs">
        <label>Nome</label>
        <input type="text" value={nome} onChange={e => setNome(e.target.value)} />

        <label>E-mail</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
    </div>
  );
}
