import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h2>Ops...</h2>
      <p>Página não encontrada</p>
      <Link to="/" data-test="voltar">
        Voltar para Home
      </Link>
    </div>
  );
}
