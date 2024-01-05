import { useDispatch } from 'react-redux';
import { Input } from './FilterStyle';
import { setFilter} from 'components/redux/contacts/filterSlice';
const Filter = () => {
  const dispatch = useDispatch();
  const onChange = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };

  return (
    <>
      <p>Find contacts by name</p>
      <Input
        onChange={onChange}
        placeholder="Search..."
        name="filter"
        type="text"
      />
    </>
  );
};
export default Filter;
