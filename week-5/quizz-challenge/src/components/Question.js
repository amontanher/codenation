import React from 'react';

function Question(props) {
  return (
    <div>
      <h3>{props.question}</h3>
      <ul>
        {props.options.map((option, index) => {
          return (
            <li key={index} onClick={() => props.onClick(option)}>
              {option.cap}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Question;
