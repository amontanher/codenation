import React from 'react';
import './App.css';
import Title from './components/Title'
import Input from './components/Input'
import List from './components/List'

function App() {
  return (
    <div className="App">
      <section>
        <Title title="Todos List"/>
        <Input/>
        <List/>
      </section>
    </div>
  );
}

export default App;
