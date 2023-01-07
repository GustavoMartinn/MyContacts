import { Card, Container, Header, InputSearchContainer, ListContainer } from './styles';

import formatPhone from '../../utils/formatPhone';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Home() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/contacts')
      .then(async response => {
        const data = await response.json();
        setContacts(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  console.log(contacts);

  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato" />
      </InputSearchContainer>
      <Header>
        <strong>{contacts.length} {contacts.length === 1 ? 'contato' : 'contatos'} </strong>
        <Link to='/new'>Novo contato</Link>
      </Header>
      <ListContainer>
        <header>
          <button type='button'>
            <span>Nome</span>
            <img src={arrow} alt='Arrow' />
          </button>
        </header>
        {contacts.map(contact => (
          <Card key={contact.id}>
            <div className="info">
              <div className="contact-name">
                <strong>{contact.name}</strong>
                {contact.category_name && <small>{contact.category_name}</small>}
              </div>
              <span>{contact.email}</span>
              <span>{formatPhone(contact.phone)}</span>
            </div>

            <div className="actions">
              <Link to={`/edit/${contact.id}`}>
                <img src={edit} alt="Edit" />
              </Link>
              <button>
                <img src={trash} alt="Trash" />
              </button>
            </div>
          </Card>
        ))}
      </ListContainer>
    </Container>
  );
}
