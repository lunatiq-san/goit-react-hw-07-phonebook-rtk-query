import { useDispatch, connect } from 'react-redux';
import { useEffect } from 'react';
import { contactsSelectors, contactsOperations } from 'redux/contacts';
import { useFetchContacts } from 'redux/contacts/contactSlice';
import Loader from 'react-loader-spinner';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact, isLoadingContacts }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const { data, isFetching, error } = useFetchContacts();

  return (
    <>
      {isLoadingContacts && (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={50}
          width={50}
          className="loader"
        />
      )}
      {
        <ul className={styles.list}>
          {contacts.map(({ id, name, number }) => (
            <li className={styles.item} name={name} key={id}>
              {name}: {number}
              <button
                className={styles.btn}
                type="button"
                onClick={() => onDeleteContact(id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      }
    </>
  );
};

const mapStateToProps = state => ({
  contacts: contactsSelectors.getVisibleContacts(state),
  isLoadingContacts: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
