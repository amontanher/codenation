import React from 'react';
import Input from './components/Input'

function App() {
  const [entrada, setEntrada] = React.useState("");

  const handleEntrada = ({target}) => {
    const {value} = target;

    setEntrada(value);
  }

  const handleKeyPress = ({key}) => {
    if(key === 'Enter'){
      console.log("enter")
    }
  }

  return (
    <div>
      <h3>GitHub</h3>
      <p>Veja os repositórios do seu usuário favorito!</p>
      <Input value={entrada} onChange={handleEntrada} onKeyPress={handleKeyPress}/>
    </div>
  );
}

export default App;
