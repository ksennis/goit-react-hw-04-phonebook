import { useState } from 'react';
import { nanoid } from "nanoid";
import propTypes from "prop-types";

import styles from './ContactForm.module.css';

export const ContactForm = ({ onAddContact }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const onChangeName = evt => {
        setName(evt.target.value);
    };

    const onChangeNumber = evt => {
        setNumber(evt.target.value);
    };

    const onSubmit = evt => {
        evt.preventDefault();
        const id = nanoid();
        const contact = { id, name, number };

        onAddContact(contact);

        setNumber(number);
        setName(name);
    };

    return (
        <form className={styles.contactsForm} onSubmit={onSubmit}>
            <h2 className={styles.title}>Phonebook</h2>
            <div className={styles.inputGroup}>
                <label className={styles.label}>Name</label>
                <input
                    onChange={onChangeName}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                />
            </div>
            <div className={styles.inputGroup}>
                <label className={styles.label}>Number</label>
                <input
                    onChange={onChangeNumber}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                />
            </div>
            <button className={styles.submitButton} type='submit'>Add contact</button>
        </form>
    );  
};

ContactForm.propTypes = {
    onAddContact: propTypes.func.isRequired
};