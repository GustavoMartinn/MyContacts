import ContactsForm from '../../components/ContactsForm';
import PageHeader from '../../components/PageHeader';

export default function EditContact() {
  return (
    <>
      <PageHeader title='Novo contato' />
      <ContactsForm
        buttonLabel='Salvar alterações'
      />
    </>
  );
}
