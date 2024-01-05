import { Element, Button, Text } from './ContactStyle';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'components/redux/contacts/operation';
const Contact = ({ item }) => {
  const dispatch = useDispatch();
  const delContact = id => {
    dispatch(deleteContact(id));
  };
  return (
    <Element>
      <Text>{item.name}</Text> <Text>{item.number}</Text>
      <Button onClick={() => delContact(item.id)} type="submit">
        Delete
      </Button>
    </Element>
  );
};
export default Contact;
