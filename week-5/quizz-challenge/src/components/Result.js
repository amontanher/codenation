import React from 'react';

function Result(props) {
  return (
    <div data-resultado={props.acertos}>
      <p>Você acertou {props.acertos} de 3 perguntas!</p>
      <button onClick={props.onClick} data-test="refazer">
        Refazer Quiz
      </button>
    </div>
  );
}

export default Result;
