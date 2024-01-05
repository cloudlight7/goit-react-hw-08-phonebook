import { Login } from 'components/Form/Login';
import { LoginContainer, LoginTitle } from './LoginPage.styled';

export default function LoginPage() {
  return (
    <LoginContainer>
      <LoginTitle>Log In</LoginTitle>

      <Login />
    </LoginContainer>
  );
}