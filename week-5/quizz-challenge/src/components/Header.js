import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Hero, Heading, Container } from 'react-bulma-components';

export default function Header() {
    return (
        <Hero color="info">
            <Hero.Body>
                <Container>
                    <Heading>Can you recognize the capitals of these countries?</Heading>
                    <Heading subtitle size={4}>
                        I know you are capable!
                </Heading>
                </Container>
            </Hero.Body>
        </Hero>
    )
}