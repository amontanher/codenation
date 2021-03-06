import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, checkTodo, deleteTodo, deleteAll } from './store/actions/todoActions'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCheck, faBullseye } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [todo, setTodo] = useState('');
  const { todoList } = useSelector(({ todos }) => todos)
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo('');
  }

  const handleChecked = (index) => {
    dispatch(checkTodo(index));
  }

  const handleDelete = (index) => {
    dispatch(deleteTodo(index));
  }

  const handleDeleteAll = () => {
    dispatch(deleteAll());
    setTodo('');
  }

  return (
    <div className="container">
      <header>
        <p>Just Another Todo App</p>
      </header>
      <section className="welcome">
        <p>Welcome</p>
        <p>To get started, add some items to your list:</p>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="I want to do..." value={todo} onChange={(e) => setTodo(e.target.value)} />
          <button>+</button>
          {/* <button type="button" onClick={handleDeleteAll}>DELETE ALL</button> */}
        </form>
      </section>
      <section>
        {todoList.map(({ value, checked }, index) => (
          <div className="todo">
            <p className={`${checked ? 'checked' : ''}`}>{value}</p>
            <div>
              {checked ? <FontAwesomeIcon icon={faCheck} onClick={() => handleChecked(index)} /> : <FontAwesomeIcon icon={faBullseye} onClick={() => handleChecked(index)} />}
              <FontAwesomeIcon icon={faTrash} color="red" onClick={() => handleDelete(index)} className="trash" />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
