import { ContactsItem } from './ContactsItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations/operations-contacts';
import selectors from 'redux/selectors';
import LoaderPage from 'components/LoaderPage';
import { toast } from 'react-toastify';

import styles from './ContactsList.module.css';

const { getContactsStatus, getFilteredContacts } = selectors;

export const ContactsList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts())
      .unwrap()
      .then(() => {
        toast.success(`Contacts updated`);
      })
      .catch(() => {
        toast.error(`Contacts didn't updated`);
      });
  }, [dispatch]);
  const contacts = useSelector(getFilteredContacts);
  const ContactsStatus = useSelector(getContactsStatus);
  const isLoading = ContactsStatus === 'loading';
  return (
    <>
      {isLoading && <LoaderPage />}
      <ul className={styles.list}>
        {contacts.map(({ id, name, number }) => (
          <ContactsItem key={id} name={name} number={number} id={id} />
        ))}
      </ul>
    </>
  );
};
