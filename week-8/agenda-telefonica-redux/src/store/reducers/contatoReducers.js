const initialState = {
  contatos: [{ nome: "a", email: "a" }]
};

export default function userReducer(state = initialState, action) {
  const { type, contato, index } = action;
  switch (type) {
    case 'ADD_CONTATO':
      return {
        ...state,
        contatos: [
          ...state.contatos,
          { nome: contato.nome, email: contato.email }
        ]
      };
    case 'EDIT_CONTATO':
      const newContacts = state.contatos.map((contact, i) => {
        if (i === action.index) {
          return action.contato;
        }
        return contact;
      });
      return { ...state, contatos: newContacts };
    case 'DELETE_CONTATO':
      state.contatos.splice(index, 1);
      return { ...state, contatos: state.contatos };
    default:
      return state;
  }
}
