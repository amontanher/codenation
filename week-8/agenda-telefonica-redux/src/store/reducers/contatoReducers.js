const initialState = {
    contatos: [{ id: 1, nome: "Alessandra", email: "a@a.com" }, { id: 2, nome: "João", email: "j@j.com" }]
};

export default function userReducer(state = initialState, action) {
    const { type, contato, index } = action;
    switch (type) {
        default: return state;
    }
}