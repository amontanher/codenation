import React from 'react';
import { Button, Box, Media, Content } from 'react-bulma-components';

function Result(props) {
  return (
    <Box>
      <Media>
        <Media.Item>
          <Content data-resultado={props.acertos}>
            You got <strong>{props.acertos}</strong> out of {' '}
            <strong>{props.total}</strong> questions right!
        </Content>
        </Media.Item>
        <Media.Item position="right">
          <Button onClick={props.onClick} color="info" data-test="refazer">
            Redo the quiz!
        </Button>
        </Media.Item>
      </Media>
    </Box>
  );
}

export default Result;
