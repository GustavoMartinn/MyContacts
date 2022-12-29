import propTypes from 'prop-types';

import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';
import { ButtonContainer, Form } from './styles';

export default function ContactsForm({ buttonLabel }) {
  return (
    <Form>
      <FormGroup>
        <Input placeholder='Nome' />
      </FormGroup>
      <FormGroup>
        <Input placeholder='E-mail' />
      </FormGroup>
      <FormGroup>
        <Input placeholder='Telefone' />
      </FormGroup>
      <FormGroup>
        <Select>
          <option value=''>Selecione uma rede social</option>
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
