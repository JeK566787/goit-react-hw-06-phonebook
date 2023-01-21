import { Ul, Li, Btn } from './ContactList.styled';
import { deleteContact } from 'redux/contactsSlice/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';

export const ContactsList = () => {
  const contacts = useSelector(state => {
    return state.contacts.contacts;
  });
  const filter = useSelector(state => state.filter.filter);

  const dispatch = useDispatch();

  // const remove = id => {
  //   dispatch(deleteContact(id));
  // };

  const setFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  // console.log(typeof filter);
  // console.log(setFilteredContacts());

  return (
    <Ul>
      {setFilteredContacts().map(({ number, name, id }) => (
        <Li key={id}>
          {name}: {number}
          <Btn type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </Btn>
        </Li>
      ))}
    </Ul>
  );
};
