import styled, { keyframes } from "styled-components";


export const Img = styled.img`
  height: 5rem;
  margin: 0 0 5rem 0;
`;

const logoRotate = keyframes `
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const LogoAnimate = styled(Img)`
  animation: ${logoRotate} infinite 3s linear;
`;