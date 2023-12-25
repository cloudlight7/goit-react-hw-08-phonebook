//mport React from 'react';
import { FormCard, FormBox, InputName, Input, Button } from './FormStyle';
import { useDispatch, useSelector } from 'react-redux';
import { addContactAction} from 'store/contacts/contactSlice';
import * as Yup from 'yup';
import "yup-phone-lite";
import { useFormik } from 'formik/dist';
const CreateContactForm = () => {
  const { contacts } = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'Too Short!')
        .max(8, 'Too Long!')
        .required('Required name'),
        phone: Yup.number()
        .min(12,'Too Short!')
        .typeError("That doesn't look like a phone number")
        .positive("A phone number can't start with a minus")
        .integer("A phone number can't include a decimal point")
        .required('A phone number is required'),
    }),
    onSubmit: values => {
      if (contacts.items.find(option => option.name === values.name)) {
        formik.resetForm();
        alert(`${values.name} is already in contact.`);
        return;
      }
      dispatch(addContactAction(values))
      formik.resetForm();
      //alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <FormCard>
      <form onSubmit={formik.handleSubmit}>
        <FormBox>
          <InputName htmlFor="firstName">Name</InputName>
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
          <Input
            style={
              formik.touched.name && formik.errors.name
                ? { backgroundColor: 'red' }
                : null
            }
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </FormBox>
        <FormBox>
          <InputName htmlFor="lastName">phone</InputName>
          {formik.touched.phone && formik.errors.phone ? (
            <div className="error">{formik.errors.phone}</div>
          ) : null}
          <Input
            style={
              formik.touched.phone && formik.errors.phone
                ? { backgroundColor: 'red' }
                : null
            }
            id="phone"
            name="phone"
            type="tel"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
        </FormBox>
        <Button type="submit">Submit</Button>
      </form>
    </FormCard>
  );
};
export default CreateContactForm;
