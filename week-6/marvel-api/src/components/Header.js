import React from 'react';
import Input from './Input';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Hero, Container, Heading } from 'react-bulma-components';

export default function Header({ value, onChange, erro, onKeyPress }) {
  return (
    <div>
      <Hero color="danger">
        <Hero.Body>
          <Container>
            <Heading>Hero Search</Heading>
            <Input
              value={value}
              onChange={onChange}
              erro={erro}
              onKeyPress={onKeyPress}
            />
          </Container>
        </Hero.Body>
      </Hero>
    </div>
  );
}
