import React from 'react';
import './App.css';
import Title from './components/Title'
import Input from './components/Input'
import List from './components/List'
import Container from './components/Container'

function App() {
  const [input, setInput] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  const handleItemClick = (indexTodo) => {
    const newTodos = [...todos];
    newTodos[indexTodo].done = !newTodos[indexTodo].done;
    setTodos(newTodos);
  }

  const handleChange = (event) => {
    setInput(event.target.value);
  }

  const handlePressEnter = (event) => {
    if (event.keyCode === 13) {
      if (input) {
        const nextId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;

        const newTodo = {
          id: nextId,
          name: input,
          done: false
        };

        setTodos([...todos, newTodo]);
        setInput('');
      }
    }
  }

  return (
    <Container>
      <section>
        <Title title="Todos List" />
        <Input
          value={input}
          onChange={handleChange}
          onPressEnter={handlePressEnter}
        />
        <List todos={todos} onClick={handleItemClick} />
      </section>
    </Container>
  );
}

export default App;