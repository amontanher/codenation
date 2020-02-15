import React from 'react';

function Question(props) {
  return (
    <div>
      <h3>{props.question.title}</h3>
      <ul data-resposta={props.resposta === undefined ? null : props.resposta.isCorrect} data-test="pergunta">
        {props.question.options.map((option, index) => {
          return (
            <li
              key={option.id}
              onClick={() => props.onClick(props.question, option.id)}
              data-test="opcao"
            >
              {option.cap}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Question;
