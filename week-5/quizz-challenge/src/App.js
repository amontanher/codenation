import React from 'react';
import Container from './components/Container';
import Question from './components/Question';
import Result from './components/Result';
import Header from './components/Header';

function App() {
  const [perguntasRespondidas, setPerguntasRespondidas] = React.useState([]);
  const [acertos, setAcertos] = React.useState(0);
  const [respostas, setRespostas] = React.useState({});
  const questions = [
    {
      id: 1,
      correct: 2,
      title: 'What is the capital of Argentina?',
      options: [
        { id: 1, cap: 'Mendoza' },
        { id: 2, cap: 'Buenos Aires' },
        { id: 3, cap: 'Bariloche' },
        { id: 4, cap: 'Ushuaia' }
      ]
    },
    {
      id: 2,
      correct: 3,
      title: 'What is the capital of Bolívia?',
      options: [
        { id: 1, cap: 'Santa Cruz' },
        { id: 2, cap: 'Sucre' },
        { id: 3, cap: 'La Paz' },
        { id: 4, cap: 'Cochabamba' }
      ]
    },
    {
      id: 3,
      correct: 4,
      title: 'What is the capital of Uruguai?',
      options: [
        { id: 1, cap: 'Punta del Este' },
        { id: 2, cap: 'Colônia do Sacramento' },
        { id: 3, cap: 'Salto' },
        { id: 4, cap: 'Montevidéu' }
      ]
    }
  ];

  const handleValidate = (question, idAnswered) => {
    const jaRespondida = perguntasRespondidas.filter(item => item === question.id);

    if (!jaRespondida.length) {
      if (idAnswered === question.correct) {
        setAcertos(acertos + 1);
        setRespostas({ ...respostas, [question.id]: { isCorrect: "correta" } });
      } else {
        setRespostas({ ...respostas, [question.id]: { isCorrect: "errada" } });
      }
      setPerguntasRespondidas([...perguntasRespondidas, question.id]);
    }
  };

  const handleRefazer = function () {
    setAcertos(0);
    setRespostas({});
    setPerguntasRespondidas([]);
  };

  return (
    <Container>
      <Header />
      {questions.map((question, index) => {
        return (
          <Question
            key={index}
            question={question}
            onClick={handleValidate}
            resposta={respostas[question.id]}
          />
        );
      })}
      {perguntasRespondidas.length === questions.length &&
        <Result acertos={acertos} onClick={handleRefazer} total={questions.length} />}
    </Container>
  );
}

export default App;
