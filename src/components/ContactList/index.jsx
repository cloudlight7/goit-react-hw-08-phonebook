import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';

import Loader from 'components/Loader';
import { toast } from 'react-toastify';
import {
  fetchContacts,
} from 'components/redux/contacts/operation';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'components/redux/contacts/selectors';
import Contact from 'components/Contact';

const ContactList = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  useEffect(() => {
    if (!!error) {
      toast.error(error);
    }
    dispatch(fetchContacts());
  }, [dispatch, error]);

  const filteredContacts = useSelector(selectVisibleContacts);

  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      <ul>
        {isLoading && <Loader />}
        {!!filteredContacts.length &&
          filteredContacts.map(item => {
            return <Contact key={item.id} item={item} />
          })}
      </ul>
    </>
  );
};

export default ContactList;


