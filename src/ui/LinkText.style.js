import { Link } from "react-router-dom";
import styled from "styled-components";


export const TextLink = styled(Link)`
  text-decoration: 0;
  font-size: .9rem;
  font-weight: 700;
  cursor: pointer;

  &:hover{
    color: orange;
  }
`;