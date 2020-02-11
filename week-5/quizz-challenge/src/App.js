import React from 'react';
import Container from './components/Container'
import Question from './components/Question'

function App() {
  const questions = [
    {
      id: 1,
      title: "Qual é a capital da Argentina?",
      correct: 2,
      options: [
        { id: 1, cap: "Mendoza" },
        { id: 2, cap: "Buenos Aires" },
        { id: 3, cap: "Bariloche" },
        { id: 4, cap: "Ushuaia" },
      ]
    },
    {
      id: 2,
      title: "Qual é a capital da Bolívia?",
      correct: 3,
      options: [
        { id: 1, cap: "Santa Cruz" },
        { id: 2, cap: "Sucre" },
        { id: 3, cap: "La Paz" },
        { id: 4, cap: "Cochabamba" },
      ]
    },
    {
      id: 3,
      title: "Qual é a capital do Uruguai?",
      correct: 4,
      options: [
        { id: 1, cap: "Punta del Este" },
        { id: 2, cap: "Colônia do Sacramento" },
        { id: 3, cap: "Salto" },
        { id: 4, cap: "Montevidéu" },
      ]
    }
  ]

  return (
    <Container>
      {questions.map((question, index) => {
        return (<Question question={question.title} options={question.options} />)
      })}
    </Container>
  );
}

export default App;
