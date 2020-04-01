import React from 'react';

import Header from '../../components/Header';
import Heroes from '../../components/Heroes';
import NotFound from '../../components/NotFound';
import Loader from '../../components/Loarder';

import { getCharacters, getCharactersByName } from '../../services/api';

import '../../components/styles.css';

export default function Home() {
  const [entrada, setEntrada] = React.useState('');
  const [heroes, setHeroes] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [heroNotFound, setHeroNotFound] = React.useState(false);

  const handleChangeInput = ({ target }) => {
    const { value } = target;
    setEntrada(value);
  };

  const handleTrash = () => {
    setHeroNotFound(false);
    setLoading(true);
    getCharacters().then(json => {
      setEntrada('');
      setHeroes(json.data.results);
      setLoading(false);
    });
  }

  /**
   *Toda vez que usar async await usar try/catch
   *Toda vez que usar promises, tratar o catch
   */
  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      getCharactersByName(entrada)
        .then(json => {
          setHeroes(json.data.results);

          if (json.data.results.length) {
            setHeroNotFound(false);
          } else {
            setHeroNotFound(true);
          }

        })
        .catch(e => {
          setHeroes([]);
        });
    }
  };

  React.useEffect(() => {
    getCharacters().then(json => {
      setHeroes(json.data.results);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <Header
        value={entrada}
        onChange={handleChangeInput}
        onKeyPress={handleKeyPress}
        onClick={handleTrash}
      />
      {loading && <Loader />}
      {heroNotFound ? <NotFound /> : <Heroes heroes={heroes} />}
    </div>
  );
}