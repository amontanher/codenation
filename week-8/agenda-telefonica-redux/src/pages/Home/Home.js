import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Button from '../../components/Button'

import './styles.css';

export default function Home() {
  const { contatos } = useSelector(({ contatos }) => contatos);

  const handleNewContact = () => {
    return <Redirect to="/create" />
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Contatos</h1>
        <Button title="Adicionar Contato" icon="FaPlus" color="#6FB0FC" click={handleNewContact} />
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
