import ReactDOM from 'react-dom';

import propTypes from 'prop-types';

import Button from '../Button';

import { Container, Footer, Overlay } from './styles';

export default function Modal({ title, body, danger }) {
  return ReactDOM.createPortal(
    <Overlay>
      <Container danger={danger}>
        <h1>{title}</h1>
        <p>
          {body}
        </p>
        <Footer>
          <button type="button" className='cancel-button'>cancelar</button>
          <Button type="Button" danger={danger}>Deletar</Button>
        </Footer>
      </Container>
    </Overlay>,
    document.getElementById('modal-root'),
  );
}

Modal.propTypes = {
  title: propTypes.string.isRequired,
  body: propTypes.string.isRequired,
  danger: propTypes.bool,
};

Modal.defaultProps = {
  danger: false,
};

