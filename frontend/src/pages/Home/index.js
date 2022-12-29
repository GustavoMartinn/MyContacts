import { Card, Container, Header, InputSearchContainer, ListContainer } from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader';


export default function Home() {
  return (
    <Container>
      <Loader />
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato" />
      </InputSearchContainer>
      <Header>
        <strong>3 contatos</strong>
        <Link to='/new'>Novo contato</Link>
      </Header>
      <ListContainer>
        <header>
          <button type='button'>
            <span>Nome</span>
            <img src={arrow} alt='Arrow' />
          </button>
        </header>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Nome do contato</strong>
              <small>Rede social</small>
            </div>
            <span>email@email.com</span>
            <span>(99) 999-999-999</span>
          </div>

          <div className="actions">
            <Link to="/edit/123">
              <img src={edit} alt="Edit" />
            </Link>
            <button>
              <img src={trash} alt="Trash" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}