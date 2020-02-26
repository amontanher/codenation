import React from 'react';
import Header from './components/Header';
import Heroes from './components/Heroes';
import { getCharacters, getCharactersByName } from './services/api';

function App() {
  const [entrada, setEntrada] = React.useState('');
  const [erro, setErro] = React.useState(null);
  const [heroes, setHeroes] = React.useState([]);

  const handleChangeInput = ({ target }) => {
    const { value } = target;

    if (value.includes('@')) {
      setErro('Caracter Inválido');
    } else {
      setErro('');
    }

    setEntrada(value);
  };

  /**
   *Toda vez que usar async await usar try/catch
   *Toda vez que usar promises, tratar o catch
   */
  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      // getCharactersByName(entrada)
      //   .then(json => setHeroes(json.data.results))
      //   .catch(e => {
      //     //fazer a logica do 404 aqui
      //     setHeroes([]);
      //   });
    }
  };

  React.useEffect(() => {
    // getCharacters().then(json => setHeroes(json.data.results));
  }, []);

  return (
    <div>
      <Header
        value={entrada}
        onChange={handleChangeInput}
        erro={erro}
        onKeyPress={handleKeyPress}
      />
      {heroes.length ? <Heroes heroes={heroes} /> : <p>404 - não encontrado</p>}
    </div>
  );
}

export default App;
