import React from 'react';
import './App.css';
import data from './data/links.json';
import Header from './components/Header';
import List from './components/List';

function App() {
  const [links, setLinks] = React.useState([{}]);
  const [modulo, setModulo] = React.useState(0);

  React.useEffect(() => {
    setLinks(data.contents[0].links);
  }, []);

  const handleChange = e => {
    setModulo(e.target.value);
    setLinks(data.contents[modulo].links);
  };

  return (
    <div id="main">
      <header id="header">
        <Header
          size={data.contents.length}
          modulo={modulo}
          handleChange={handleChange}
        />
      </header>
      <br />
      <List links={links} />
    </div>
  );
}

export default App;
