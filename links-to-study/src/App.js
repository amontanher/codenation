import React from 'react';
import './App.css';
import data from './data/links.json';
import Header from './components/Header';
import List from './components/List';

function App() {
  const [links, setLinks] = React.useState([{}]);
  const [show, setShow] = React.useState(false);

  const handleChange = e => {
    const selected = e.target.value;

    if (selected !== 'NA') {
      setLinks(data.contents[selected].links);
      setShow(true);
    } else {
      setLinks([{}]);
      setShow(false);
    }
  };

  return (
    <div id="main">
      <header id="header">
        <Header size={data.contents.length} handleChange={handleChange} />
      </header>
      <br />
      {show && <List links={links} />}
      {!show && <p>Please, select a module</p>}
    </div>
  );
}

export default App;
