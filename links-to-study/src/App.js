import React from 'react';
import './App.css';
import data from './data/links.json';
import Header from './components/Header';
import List from './components/List';

function App() {
  const [links, setLinks] = React.useState(data.contents[0].links);

  const handleChange = e => {
    setLinks(data.contents[e.target.value].links);
  };

  return (
    <div id="main">
      <header id="header">
        <Header size={data.contents.length} handleChange={handleChange} />
      </header>
      <br />
      <List links={links} />
    </div>
  );
}

export default App;
