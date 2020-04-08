import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../components/Button'

import './styles.css';

export default function Home() {
  const { contatos } = useSelector(({ contatos }) => contatos);
  console.log(contatos);
  return (
    <div className="container">
      <div className="header">
        <h1>Contatos</h1>
        <Button title="Adicionar Contato" icon="FaPlus" color="#6FB0FC"/>
      </div>
      {/* {contatos.map((contato, index) => (
        <div key={index}>
          <h3>{contato.nome}</h3>
          <p>{contato.email}</p>
          <Link to={`/${index}/edit`}>Editar</Link>
          <br />
          <Link to="/">Apagar</Link>
        </div>
      ))} */}
    </div>
  );
}
