import React from 'react';

function Question(props) {
  return (
    <div data-test="pergunta">
      <h3>{props.question.title}</h3>
      <ul data-resposta="alterar">
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
