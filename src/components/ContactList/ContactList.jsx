import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from 'redux/contacts/contactSlice';
import styles from './ContactList.module.css';

const ContactList = () => {
  const { data: contacts } = useFetchContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  return (
    <>
      {
        <ul className={styles.list}>
          {contacts &&
            contacts.map(({ id, name, number }) => (
              <li className={styles.item} name={name} key={id}>
                {name}: {number}
                <button
                  className={styles.btn}
                  type="button"
                  onClick={() => deleteContact(id)}
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

export default ContactList;
