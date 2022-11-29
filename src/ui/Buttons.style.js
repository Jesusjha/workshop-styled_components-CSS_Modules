import styled from "styled-components";

export const Button = styled.button`
    padding: .6rem 1.2rem;
  border: 0;
  border-radius: .3rem;
  background-color: #FFC333;
  color: #000;
`;

export const SubmitButton = styled(Button).attrs({
  type: 'submit'
})`
  text-decoration: 0;
`;

