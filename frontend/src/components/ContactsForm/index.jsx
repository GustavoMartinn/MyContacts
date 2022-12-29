import { useState } from 'react';
import propTypes from 'prop-types';

import isEmailValid from '../../utils/isEmailValid';

import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

import { ButtonContainer, Form } from './styles';

export default function ContactsForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [socialNetwork, setSocialNetwork] = useState('');
  const [erros, setErros] = useState([]);

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setErros((prevState) => [
        ...prevState,
        { field: 'name', message: 'O campo nome é obrigatório' },
      ]);
      return;
    }

    setErros((prevState) =>
      prevState.filter((error) => error.field !== 'name')
    );
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      const errorAlreadyExists = erros.some((error) => error.field === 'email');

      if (errorAlreadyExists) return;

      setErros((prevState) => [
        ...prevState,
        { field: 'email', message: 'E-mail inválido' },
      ]);
      return;
    }

    setErros((prevState) =>
      prevState.filter((error) => error.field !== 'email')
    );
  }

  function getErrorMessageByFieldName(fieldName) {
    return erros.find((error) => error.field === fieldName)?.message;
  }

  console.log(erros);

  function handleSubmit(event) {
    event.preventDefault();

    console.log({
      name,
      email,
      phone,
      socialNetwork,
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          error={getErrorMessageByFieldName('name')}
          placeholder='Nome'
          value={name}
          onChange={handleNameChange}
        />
      </FormGroup>
      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          error={getErrorMessageByFieldName('email')}
          placeholder='E-mail'
          value={email}
          onChange={handleEmailChange}
        />
      </FormGroup>
      <FormGroup>
        <Input
          placeholder='Telefone'
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Select
          value={socialNetwork}
          onChange={(event) => setSocialNetwork(event.target.value)}
        >
          <option value=''>Selecione uma rede social</option>
          <option value='facebook'>Facebook</option>
          <option value='instagram'>Instagram</option>
          <option value='linkedin'>LinkedIn</option>
          <option value='twitter'>Twitter</option>
        </Select>
      </FormGroup>
      <ButtonContainer>
        <Button type='submit'>{buttonLabel}</Button>
      </ButtonContainer>
    </Form>
  );
}

ContactsForm.propTypes = {
  buttonLabel: propTypes.string.isRequired,
};
