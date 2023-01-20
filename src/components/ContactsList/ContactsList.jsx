import PropTypes from 'prop-types';
import { Ul, Li, Btn } from './ContactList.styled';
import { deleteContact } from 'redux/contactsSlice/contactsSlice';
import { useDispatch } from 'react-redux';

export const ContactsList = ({ list }) => {
  const dispatch = useDispatch();

  const remove = id => {
    dispatch(deleteContact(id));
  };

  return (
    <Ul>
      {list.map(({ number, name, id }) => (
        <Li key={id}>
          {name}: {number}
          <Btn type="button" onClick={() => remove(id)}>
            Delete
          </Btn>
        </Li>
      ))}
    </Ul>
  );
};
ContactsList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleteContacts: PropTypes.func.isRequired,
};
