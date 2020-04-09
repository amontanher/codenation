import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContato } from '../../store/actions/contatoActions';
import { Link, Redirect } from 'react-router-dom';
import { FaArrowLeft, FaSave } from 'react-icons/fa';

export default function Create() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const createContact = () => {
    const contato = { nome: nome, email: email };
    dispatch(addContato(contato));
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
        <h1>New contact</h1>
        <Link className="back-link" to="/"><FaArrowLeft />Return</Link>
        <Link style={style} to="#" onClick={createContact}><FaSave /> Create Contact</Link>
      </div>
      <div className="container-inputs">
        <label>Name</label>
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
