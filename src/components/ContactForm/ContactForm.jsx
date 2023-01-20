import { useState } from 'react';
import PropTypes from 'prop-types';
import { Label, Input, Btn } from './ContactForm.styled';
export const ContactForm = ({addContact})=>{
  const [name, setName] = useState('');
  const [number, setNumber] = useState('')
  

  const inputChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value)
        break;
    case 'number':
        setNumber(value)
        break;
      default:
        break;
    }
  };

  const onFormSubmit = event => {
    event.preventDefault();

    addContact({name,number});
    setName('')
    setNumber('')
  };


    return (
      <form onSubmit={onFormSubmit}>
        <Label>
          Name
          <Input
            value={name}
            onChange={inputChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number
          <Input
            value={number}
            onChange={inputChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>

        <Btn type="submit">Add contact</Btn>
      </form>
    );
  }


ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
