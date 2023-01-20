import { useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactsList } from './ContactsList/ContactsList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Container, Message } from './App.styled';
import { useEffect } from 'react';

import { useSelector } from 'react-redux';

export const App = () => {
  // const [contacts, setContacts] = useState(
  //   JSON.parse(localStorage.getItem('contacts')) ?? []
  // );
  const [filter, setFilter] = useState('');

  const contacts = useSelector(state => {
    console.log(state);
    return state.contacts.contacts;
  });

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = data => {
    const repeatCheck = contacts.find(contact => {
      return contact.text === data.name;
    });
    if (repeatCheck) {
      alert('Already in Contacts');
      return;
    }
    const contact = {
      ...data,
      id: nanoid(),
    };
    setContacts(prevState => [...prevState, contact]);
  };

  // const deleteContacts = id => {
  //   setContacts(prevState => prevState.filter(el => el.id !== id));
  // };

  const filterInputChange = filter => {
    setFilter(filter);
  };

  const setFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = setFilteredContacts();
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      {contacts.length > 0 ? (
        <>
          <h2>Contacts</h2>
          <Filter filterInputChange={filterInputChange} />
          <ContactsList
            list={filteredContacts}
            // deleteContacts={deleteContacts}
          />
        </>
      ) : (
        <Message>Contacts list is empty yet</Message>
      )}
    </Container>
  );
};
