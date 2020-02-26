import React from 'react';
import Input from './components/Input';
import List from './components/List';
import emptyImg from './assets/empty.png';
import notfound from './assets/notfound.png';
import { Grid, Typography } from '@material-ui/core';
import css from '../src/App.css';
import { makeStyles } from '@material-ui/core/styles';

import { getRepositoriesByUser } from './services/api';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 25,
    marginBottom: 25
  }
}));

function App() {
  const classes = useStyles();

  const regex = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;

  const [entrada, setEntrada] = React.useState('');
  const [error, setError] = React.useState(false);
  const [notFound, setNotFound] = React.useState(false);
  const [empty, setEmpty] = React.useState(false);
  const [repositories, setRepositories] = React.useState([]);

  const handleEntrada = ({ target }) => {
    const { value } = target;

    if (value.length === 0) {
      setRepositories([]);
      setNotFound(false);
      setEmpty(false);
    } else if (!regex.test(value)) {
      setError(true);
    } else {
      setError(false);
    }

    setEntrada(value);
  };

  const handleKeyPress = async ({ key }) => {
    if (key === 'Enter' && !error) {
      await getRepositoriesByUser(entrada).then(r => handleResponse(r));
    }
  };

  const handleResponse = r => {
    if (r.status === 200 && r.repositories.length > 0) {
      setRepositories(r.repositories);
      setNotFound(false);
      setEmpty(false);
    } else if (r.status === 404) {
      setRepositories([]);
      setNotFound(true);
      setEmpty(false);
    } else {
      setRepositories([]);
      setNotFound(false);
      setEmpty(true);
    }
  };

  return (
    <div>
      <Grid
        container
        className={classes.root}
        direction="column"
        alignContent="center"
      >
        <Typography align="center" component="h3" variant="display3">
          GitHub
        </Typography>
        <p>Veja os repositórios do seu usuário favorito!</p>
        <Input
          value={entrada}
          onChange={handleEntrada}
          onKeyPress={handleKeyPress}
          hasError={error}
        />
        {error && <p>User inválido</p>}

        {notFound && (
          <div>
            <br></br>
            <img
              data-test="nao-encontrado"
              src={notfound}
              alt="Username not found."
            />
          </div>
        )}
        {empty && (
          <div>
            <br></br>
            <img
              data-test="sem-repositorios"
              src={emptyImg}
              alt="Empty repository"
            />
          </div>
        )}
      </Grid>
      <List repositories={repositories} />
    </div>
  );
}

export default App;
