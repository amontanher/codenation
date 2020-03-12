export const getContatoById = id => {
    return ({type: 'GET_CONTATO', id})
}

export const addContato = contato => {
    return ({type: 'ADD_CONTATO', contato})
}

export const editContato = contato => {
    return ({type: 'EDIT_CONTATO', contato})
}

export const deleteContato = id => {
    return ({type: 'DELETE_CONTATO', id})
}