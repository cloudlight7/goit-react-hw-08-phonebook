import { Element, Button, Text } from './ContactStyle';
import { useDispatch } from 'react-redux';
import { deleteContactAction } from '../../store/contacts/contactSlice';
const Contact = ({ item }) => {
  const dispatch = useDispatch();
  const delContact = id => {
    dispatch(deleteContactAction(id));
  };
  return (
    <Element>
      <Text>{item.name}</Text> <Text>{item.phone}</Text>
      <Button onClick={() => delContact(item.id)} type="submit">
        Delete
      </Button>
    </Element>
  );
};
export default Contact;
