import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addTodo, checkTodo, deleteTodo, deleteAll} from './store/actions/todoActions'
import './App.css';

function App() {
  const [todo, setTodo] = useState('');
  const  {todoList} = useSelector(({todos})=> todos)
  const dispatch = useDispatch();

  const handleSubmit = (e) =>{
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
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" value={todo} onChange={(e)=> setTodo(e.target.value)} />
        <button>SALVAR TODO</button>
        <button type="button" onClick={handleDeleteAll}>DELETE ALL</button>
      </form>
      {todoList.map(({value, checked}, index) => (
        <>
          <p className={`${checked ? 'checked' : ''}`}>{value}</p>
          <button onClick={()=> handleChecked(index)}>{checked ? 'NÃO FEITO' : 'FEITO'}</button>
          <button onClick={()=> handleDelete(index)}>APAGAR</button>

        </>
      ))}
    </div>
  );
}

export default App;
