import { Register } from 'components/Form/Register';
import { RegisterContainer, RegisterTitle } from './RegisterPage.styled';

export default function RegisterPage() {
  return (
    <RegisterContainer>
      <RegisterTitle>Registration</RegisterTitle>

      <Register />
    </RegisterContainer>
  );
}