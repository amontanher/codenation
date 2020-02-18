import React from 'react';
import Input from './components/Input';
import { getRepositoriesByUser } from './services/api';

function App() {
  const [entrada, setEntrada] = React.useState("");

  const handleEntrada = ({ target }) => {
    const { value } = target;

    setEntrada(value);
  }

  const handleKeyPress = ({ key }) => {
    if (key === 'Enter') {
      getRepositoriesByUser(entrada).then(json => console.log(json));
    }
  }

  return (
    <div>
      <h3>GitHub</h3>
      <p>Veja os repositórios do seu usuário favorito!</p>
      <Input value={entrada} onChange={handleEntrada} onKeyPress={handleKeyPress} />
    </div>
  );
}

export default App;
