import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './contacts-actions';

axios.defaults.baseURL = ' http://localhost:4040';

const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());

  axios
    .get('/contacts')
    .then(({ data }) => {
      dispatch(fetchContactsSuccess(data));
    })
    .catch(error => dispatch(fetchContactsError(error)));
};
// dispatch функцию, которая выполняется
// const asyncActionCreator = args => dispatch => {};
const addContact =
  ({ name, number }) =>
  dispatch => {
    const contact = { name, number };

    dispatch(addContactRequest());
    axios
      .post('/contacts', contact)
      .then(({ data }) => dispatch(addContactSuccess(data)))
      .catch(error => dispatch(addContactError(error)));
  };

const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest(id));

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error)));
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact, fetchContacts };
