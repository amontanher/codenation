import React from 'react';
import Input from './components/Input';
import { getRepositoriesByUser } from './services/api';

function App() {
  const regex = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;

  const [entrada, setEntrada] = React.useState('');
  const [error, setError] = React.useState(false);

  const handleEntrada = ({ target }) => {
    debugger;
    const { value } = target;

    if (!regex.test(value)) {
      setError(true);
    } else {
      setError(false);
    }
    setEntrada(value);
  };

  const handleKeyPress = ({ key }) => {
    if (key === 'Enter') {
      getRepositoriesByUser(entrada).then(json => console.log(json));
    }
  };

  return (
    <div>
      <h3>GitHub</h3>
      <p>Veja os repositórios do seu usuário favorito!</p>
      <Input
        value={entrada}
        onChange={handleEntrada}
        onKeyPress={handleKeyPress}
        hasError={error}
      />
      {error && <p>User inválido</p>}
    </div>
  );
}

export default App;
