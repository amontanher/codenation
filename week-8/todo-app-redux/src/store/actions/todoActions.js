export const addTodo = (todo) => {
    return ({ type: 'ADD_TODO', todo})
}

export const checkTodo = (index) => {
    return ({ type: 'CHECK_TODO', index})
}

export const deleteTodo = (index) => {
    return ({ type: 'DELETE_TODO', index})
}