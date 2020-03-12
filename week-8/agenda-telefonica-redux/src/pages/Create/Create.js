import React, { useState } from 'react';

export default function Create() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div>
            <label>Nome</label>
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}/>

            <label>E-mail</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>

            <button>Criar Contato</button>
        </div>
    );
}