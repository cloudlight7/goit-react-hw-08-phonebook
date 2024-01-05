import styled from 'styled-components';
import { Form, Field } from 'formik';


export const FormCard = styled.div`
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #e8e8e8;
  box-shadow: 2px 2px 10px #ccc;
`;
export const RegisterStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 300px;
`;

export const RegisterButton = styled.button`
  width: 100%;
  background-color: #333;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #ccc;
    color: black;
  }
`;

export const RegisterInput = styled(Field)`
  width: 100%;
  padding: 12px 20px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  transition: 0.5s;
`;