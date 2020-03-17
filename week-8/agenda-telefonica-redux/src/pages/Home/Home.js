import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Home() {
  const { contatos } = useSelector(({ contatos }) => contatos);
  console.log(contatos);
  return (
    <div>
      {contatos.map((contato, index) => (
        <div key={index}>
          <h3>{contato.nome}</h3>
          <p>{contato.email}</p>
          <Link to={`/${index}/edit`}>Editar</Link>
          <br />
          <Link to="/">Apagar</Link>
        </div>
      ))}
    </div>
  );
}
