import React from 'react';
import { Heading, Box, Button, Container } from 'react-bulma-components';

function Question(props) {

  const getColor = answer => {
  }

  return (
    <div>
      <Box>
        <Container>
          <Heading>{props.question.title}</Heading>
          <ul data-resposta={props.resposta === undefined ? null : props.resposta.isCorrect} data-test="pergunta">
            {props.question.options.map((option, index) => {
              return (
                <Button
                  fullwidth
                  size="medium"
                  style={{ marginTop: '10px', backgroundColor: 'lightGrey' }}
                  onClick={() => props.onClick(props.question, option.id)}
                  data-test="opcao"
                  key={option.id}
                  backgroundColor={getColor(props.resposta)}>
                  {option.cap}
                </Button>
              );
            })}
          </ul>
        </Container>
      </Box>
    </div>
  );
}

export default Question;
