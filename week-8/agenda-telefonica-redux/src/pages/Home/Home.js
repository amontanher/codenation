import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

import NoContacts from '../../assets/nocontacts.png';

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
        <h1>Contacts</h1>
        <p className="contact-length">({contatos.length})</p>
        <Link style={style} to="/create"><FaPlus /> Add Contact</Link>
      </div>
      {contatos.map((contato, index) => (
        <div key={index} className="container-contact">
          <h3>{contato.nome}</h3>
          <p>{contato.email}</p>
        </div>
      ))}

      {!contatos.length ? '' : <div className="no-contacts"><img src={NoContacts} alt="No Contacts" /></div>}
    </div>
  );
}
