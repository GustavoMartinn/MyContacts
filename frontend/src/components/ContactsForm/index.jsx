import propTypes from 'prop-types';

import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';
import { ButtonContainer, Form } from './styles';
import { useState } from 'react';

export default function ContactsForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [socialNetwork, setSocialNetwork] = useState('');

  return (
    <Form>
      <FormGroup>
        <Input
          placeholder='Nome'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Input
          placeholder='E-mail'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
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
