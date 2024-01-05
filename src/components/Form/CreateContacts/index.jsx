//mport React from 'react';
import { FormCard, FormBox, InputName, Input, Button } from './FormStyle';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import "yup-phone-lite";
import { useFormik } from 'formik/dist';
import { addContact } from 'components/redux/contacts/operation';
import { selectContacts } from 'components/redux/contacts/selectors';
export const CreateContactForm = () => {
  const contacts  = useSelector(selectContacts);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'Too Short!')
        .max(8, 'Too Long!')
        .required('Required name'),
        number: Yup.number()
        .min(12,'Too Short!')
        .typeError("That doesn't look like a phone number")
        .positive("A phone number can't start with a minus")
        .integer("A phone number can't include a decimal point")
        .required('A phone number is required'),
    }),
    onSubmit: values => {
      if (contacts.find(option => option.name.toLowerCase() === values.name.toLowerCase())) {
        formik.resetForm();
        alert(`${values.name} is already in contact.`);
        return;
      }
      dispatch(addContact(values))
      formik.setSubmitting(false);
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
          {formik.touched.number && formik.errors.number ? (
            <div className="error">{formik.errors.number}</div>
          ) : null}
          <Input
            style={
              formik.touched.number && formik.errors.number
                ? { backgroundColor: 'red' }
                : null
            }
            id="number"
            name="number"
            type="tel"
            onChange={formik.handleChange}
            value={formik.values.number}
          />
        </FormBox>
        <Button type="submit">Submit</Button>
      </form>
    </FormCard>
  );
};
