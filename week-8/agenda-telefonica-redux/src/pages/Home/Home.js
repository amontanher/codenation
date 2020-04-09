import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaPlus, FaTrash, FaPen } from 'react-icons/fa';

import NoContacts from '../../assets/nocontacts.png';

import { deleteContato } from '../../store/actions/contatoActions';

import './styles.css';

export default function Home() {
  const { contatos } = useSelector(({ contatos }) => contatos);
  const contactsLength = contatos.length;
  const dispatch = useDispatch();

  const style = {
    backgroundColor: '#6FB0FC',
    color: 'white',
    border: 0,
    borderRadius: 5,
    padding: 5,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none'
  };

  const handleDelete = (i) => {
    dispatch(deleteContato(i));
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Contacts</h1>
        <p className="contact-length" data-test={`total-${contactsLength}`}>({contactsLength})</p>
        <Link style={style} to="/create" data-test="novo-contato"><FaPlus /> Add Contact</Link>
      </div>
      {contatos.map((contato, index) => (
        <div key={index} className="container-contact">
          <div className="container-contact-data">
            <h3>{contato.nome}</h3>
            <p>{contato.email}</p>
          </div>
          <div className="container-contact-actions">
            <Link to={`/${index}/edit`} className="act-update" data-test="editar"><FaPen color="black" size={12} /></Link>
            <Link to="#" onClick={() => handleDelete(index)} className="act-delete" data-test="apagar"><FaTrash color="black" size={12} /></Link>
          </div>
        </div>
      ))}

      {contactsLength > 0 ? '' : <div className="no-contacts" data-test="sem-contatos"><img src={NoContacts} alt="No Contacts" /></div>}
    </div>
  );
}
