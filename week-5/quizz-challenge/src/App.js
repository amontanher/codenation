import React from 'react';
import Container from './components/Container';
import Question from './components/Question';
import Result from './components/Result';

function App() {
  const [perguntasRespondidas, setPerguntasRespondidas] = React.useState([]);
  const [acertos, setAcertos] = React.useState(0);
  const [resposta, setResposta] = React.useState("");
  const questions = [
    {
      id: 1,
      title: 'Qual é a capital da Argentina?',
      options: [
        { id: 1, cap: 'Mendoza', correct: false },
        { id: 2, cap: 'Buenos Aires', correct: true },
        { id: 3, cap: 'Bariloche', correct: false },
        { id: 4, cap: 'Ushuaia', correct: false }
      ]
    },
    {
      id: 2,
      title: 'Qual é a capital da Bolívia?',
      options: [
        { id: 1, cap: 'Santa Cruz', correct: false },
        { id: 2, cap: 'Sucre', correct: false },
        { id: 3, cap: 'La Paz', correct: true },
        { id: 4, cap: 'Cochabamba', correct: false }
      ]
    },
    {
      id: 3,
      title: 'Qual é a capital do Uruguai?',
      options: [
        { id: 1, cap: 'Punta del Este', correct: false },
        { id: 2, cap: 'Colônia do Sacramento', correct: false },
        { id: 3, cap: 'Salto', correct: false },
        { id: 4, cap: 'Montevidéu', correct: true }
      ]
    }
  ];

  const handleValidate = question => {
    if (question.correct) {
      setAcertos(acertos + 1);
      setResposta("correta");
    } else {
      setResposta("errada");
    }


    // perguntasRespondidas.filter(item => item === questin.Id)
  };

  const handleRefazer = function () {
    setAcertos(0);
  };

  return (
    <Container>
      {questions.map((question, index) => {
        return (
          <Question
            key={index}
            question={question.title}
            options={question.options}
            onClick={handleValidate}
            resposta={resposta}
          />
        );
      })}
      <Result acertos={acertos} onClick={handleRefazer} />
    </Container>
  );
}

export default App;
