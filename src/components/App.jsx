import { useState, useEffect } from "react";

import { ContactForm } from "./ContactsForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./FilterSearch";
import { useMemo } from "react";

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contactsString = localStorage.getItem('contacts');

    if (contactsString) {
      setContacts(JSON.parse(contactsString));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleChange = evt => {
    setFilter(evt.target.value);
  }; 

  const onAddContact = contact => {
    const matchedContact = contacts.find(cnt => cnt.name.toLowerCase() === contact.name.toLowerCase());

    if (matchedContact) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    setContacts((prevState) => ([
      ...prevState,
      contact
    ]));
  }

  const handleDelete = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  }

  const filteredContacts = useMemo(() => {
    return (
      contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
    )
  }, [contacts, filter]) 
  
  return (
    <div>
      <ContactForm onAddContact={onAddContact} />
      <Filter 
        filter={filter}
        onChange={handleChange}
      />
      <ContactList 
        contacts={filteredContacts} 
        onClickDelete={handleDelete}
      />
    </div>
  );
}