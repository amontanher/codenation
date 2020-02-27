import React from 'react';
import './App.css';
import data from './data/links.json';
import List from './components/List';

function App() {
  return (
    <div id="main">
      <header id="header">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </header>
      <br />
      <List links={data.contents[0].links} />
    </div>
  );
}

export default App;
