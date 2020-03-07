const initialState = {
    todoList: []
};

export default function userReducer(state = initialState, action) {
    const {type, todo, index} = action;
    switch (type) {
        case "ADD_TODO": return {...state, todoList: [...state.todoList, {value:todo, checked: false}]}
        case "CHECK_TODO": 
            let checkedTodoList = state.todoList;
            checkedTodoList[index] = {...state.todoList[index], checked: !state.todoList[index].checked }
            return {...state, todoList: checkedTodoList }
        case "DELETE_TODO": 
            let deletedTodoList = state.todoList;
            deletedTodoList.splice(index, 1);
            return {...state, todoList: deletedTodoList }
        default: return state;
        
    }
}