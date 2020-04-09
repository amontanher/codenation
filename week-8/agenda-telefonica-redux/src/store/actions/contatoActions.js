export const getContatoById = id => {
    return ({ type: 'GET_CONTATO', id })
}

export const addContato = contato => {
    return ({ type: 'ADD_CONTATO', contato })
}

export const editContato = (contato, index) => {
    return ({ type: 'EDIT_CONTATO', contato, index })
}

export const deleteContato = index => {
    return ({ type: 'DELETE_CONTATO', index })
}