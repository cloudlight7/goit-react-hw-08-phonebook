//import { data} from './BoxButtonStyle'
import { useDispatch, useSelector } from 'react-redux';
import Contact from '../Contact';
import { getContactAction } from 'store/contacts/contactSlice';
import { useEffect } from 'react';
import {  selectError, selectLoading, selectVisibleContacts } from './selectors';
import Loader from 'components/Loader';

const FeedbackOptions = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);
  const error = useSelector(selectError);
  const isload = useSelector(selectLoading);

  useEffect(() => {
      dispatch(getContactAction());
   
  }, [dispatch]);
  return (
    <ul>
      {isload&& <h2>{error}</h2>}
      {isload?<Loader/> : contacts.map(item => {
        return <Contact key={item.id} item={item} />;
      })}
    </ul>
  );
};
export default FeedbackOptions;
