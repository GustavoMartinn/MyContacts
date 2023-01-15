import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import Loader from '../../components/Loader';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

import formatPhone from '../../utils/formatPhone';

import { Card, Container, Header, InputSearchContainer, ListHeader } from './styles';
import delay from '../../utils/delay';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const filteredContacts = useMemo(() => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }, [contacts, searchTerm]);

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:3001/contacts?orderBy=${orderBy}`)
      .then(async response => {
        await delay(500);

        const data = await response.json();
        setContacts(data);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [orderBy]);

  function handleClickToggleOrderBy() {
    setOrderBy((prevState) => prevState === 'asc' ? 'desc' : 'asc');
  }

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <Container>
      <Loader isLoading={isLoading} />
      <InputSearchContainer>
        <input
          type="text"
          placeholder="Pesquisar contato"
          value={searchTerm}
          onChange={handleChangeSearchTerm}
        />
      </InputSearchContainer>
      <Header>
        <strong>{filteredContacts.length} {filteredContacts.length === 1 ? 'contato' : 'contatos'} </strong>
        <Link to='/new'>Novo contato</Link>
      </Header>
      {filteredContacts.length > 0 && <ListHeader orderBy={orderBy}>
        <button type='button' onClick={handleClickToggleOrderBy}>
          <span>Nome</span>
          <img src={arrow} alt='Arrow' />
        </button>
      </ListHeader>}
      {filteredContacts.map(contact => (
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
    </Container>
  );
}
