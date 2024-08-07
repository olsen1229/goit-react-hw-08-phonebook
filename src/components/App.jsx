import React, { useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../redux/filterSlice';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { fetchContacts, addContact, deleteContact } from '../redux/operations';
import {
  selectFilter,
  selectVisibleContacts,
  selectIsLoading,
  selectError,
} from '../redux/selectors';

// only the global states shall be transferred to the redux store
export const App = () => {
  // STEPS TO FOLLOW FOR TRANSLATING HOOKS STATES TO REDUX SELECTORS AND DISPATCHERS
  // translate the existing states using the states declared from our Redux selectors
  // rename the event handlers so that their names are not the same as the Redux actions
  // then import dispatch and apply it inside of the event handlers

  // const [contacts, setContacts] = useState(retrievedInitialContacts);
  // const [filter, setFilter] = useState('');

  const visibleContacts = useSelector(selectVisibleContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  // console.log('contacts state value: ', contacts);

  // useEffect(() => {
  //   // console.log('Saving contacts to localStorage:', contacts);
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = newContact => {
    // console.log('Adding new contact:', newContact);
    // const duplicateContact = contacts.find(
    //   contact => contact.name === newContact.name
    // );

    // if (duplicateContact) {
    //   // console.log('Duplicate contact found:', duplicateContact);
    //   alert(`${newContact.name} is already in your contacts.`);
    //   return;
    // }

    // setContacts(prevContacts => {
    //   // this is where the return value from the contacts reducer is coming from
    //   const updatedContacts = [...prevContacts, newContact];
    //   // console.log('Updated contacts after adding:', updatedContacts);
    //   return updatedContacts;
    // });

    // we replaced the setter function of the useState with the dispatch action from redux
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = id => {
    // console.log('Deleting contact with id:', id);
    // setContacts(prevContacts => {
    //   const updatedContacts = prevContacts.filter(contact => contact.id !== id);
    //   // console.log('Updated contacts after deleting:', updatedContacts);
    //   return updatedContacts;
    // });

    dispatch(deleteContact(id));
  };

  const handleSetFilter = newFilter => {
    // Placeholder for future Redux dispatch to update filter
    dispatch(setFilter(newFilter));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={handleAddContact} contacts={visibleContacts} />

      <h2>Contacts</h2>
      <Filter filter={filter} setFilter={handleSetFilter} />
      {isLoading && (
        <b style={{ display: 'block', padding: '0 0 20px 10px' }}>Loading...</b>
      )}
      {error && <b>Error: {error}</b>}
      {visibleContacts && (
        <ContactList
          contacts={visibleContacts}
          deleteContact={handleDeleteContact}
        />
      )}
    </div>
  );
};


    


   
 