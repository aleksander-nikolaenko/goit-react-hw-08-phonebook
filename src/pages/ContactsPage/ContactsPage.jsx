import { ContactForm } from 'components/ContactForm';
import { ContactsList } from 'components/ContactsList';
import { Container } from 'components/Container';
import { Filter } from 'components/Filter';

const ContactsPage = () => {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </Container>
  );
};

export default ContactsPage;
