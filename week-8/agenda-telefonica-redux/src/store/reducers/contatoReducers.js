const initialState = {
    contatos: [{ nome: "Alessandra", email: "a@a.com" }, { nome: "João", email: "j@j.com" }]
};

export default function userReducer(state = initialState, action) {
    const { type, contato, index } = action;
    switch (type) {
        default: return state;
    }
}