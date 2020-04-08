import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

import './styles.css';

export default function Home() {
  const { contatos } = useSelector(({ contatos }) => contatos);

  const style = {
    backgroundColor: '#6FB0FC',
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
        <h1>Contatos</h1>
        <p className="contact-length">({contatos.length})</p>
        <Link style={style} to="/create"><FaPlus /> Adicionar Contato</Link>
      </div>
      {contatos.map((contato, index) => (
        <div key={index} className="container-contact">
          <h3>{contato.nome}</h3>
          <p>{contato.email}</p>
        </div>
      ))}
    </div>
  );
}
