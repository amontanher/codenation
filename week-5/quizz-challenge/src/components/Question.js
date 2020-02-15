import React from 'react';

function Question(props) {
  return (
    <div data-test="pergunta">
      <h3>{props.question}</h3>
      <ul data-resposta={props.resposta}>
        {props.options.map((option, index) => {
          return (
            <li
              key={option.id}
              onClick={() => props.onClick(option)}
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
