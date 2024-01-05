import { logIn } from 'components/redux/auth/operation';
import { ErrorMessage, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import {
  LoginButton,
  LoginInput,
  LoginStyled,
  FormCard,
} from './Login.style';

export const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = (value) => {
    const { email, password } = value;
    dispatch(
      logIn({
        email: email,
        password: password,
      })
    );
   
  };

  const schema = yup.object().shape({
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
        email: '',
        password: '',
      }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <LoginStyled>
        <LoginInput
          type="email"
          name="email"
          placeholder="Enter your Email"
          autoComplete="username"
        />
        <ErrorMessage component="div" name="email" />

        <LoginInput
          type="password"
          name="password"
          placeholder="Enter your Password"
          autoComplete="current-password"
        />
        <ErrorMessage component="div" name="password" />

        <LoginButton type="submit">Log In</LoginButton>
      </LoginStyled>
    </Formik>
    </FormCard>
  );
};