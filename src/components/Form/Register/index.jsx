import { ErrorMessage, Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from 'components/redux/auth/operation';
import {
  RegisterButton,
  RegisterInput,
  RegisterStyled,
  FormCard,
} from './Register.styled';

export const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = (value) => {
    const { name, email, password } = value;
    dispatch(
      register({
        name: name,
        email: email,
        password: password,
      })
    );

   
  };

  const schema = yup.object().shape({
    name: yup
      .string()
      .min(3, 'Too Short!')
      .max(30, 'Too Long!')
      .required('Required'),
    email: yup
      .string()
      .email()
      .min(3, 'Too Short!')
      .max(30, 'Too Long!')
      .required('Required'),
    password: yup
      .string()
      .min(5, 'Too Short!')

      .required('Required'),
  });

  return (
    <FormCard>
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <RegisterStyled>
        <RegisterInput
          type="text"
          name="name"
          placeholder="Enter your Name"
          autoComplete="username"
        />
        <ErrorMessage component="div" name="name" />

        <RegisterInput
          type="email"
          name="email"
          placeholder="Enter your Email"
          autoComplete="username"
        />
        <ErrorMessage component="div" name="email" />

        <RegisterInput
          type="password"
          name="password"
          autoComplete="current-password"
          placeholder="Enter your Password"
        />
        <ErrorMessage component="div" name="password" />

        <RegisterButton type="submit">Sign Up</RegisterButton>
      </RegisterStyled>
    </Formik>
    </FormCard>
  );
};