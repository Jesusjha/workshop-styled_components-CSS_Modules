import styled from "styled-components";

export const TopHeading = styled.h1`
  margin: 1.5rem 0 2rem 0;
  padding: 0 0 1.5rem 0;
  font-size: 2.5rem;
  font-weight: 200;
  text-align: center;
`

export const Title = styled.h2`
  margin: 0 0 1rem 0;
  color: #61dbfb;
  font-weight: 600;
  font-size: 1.6rem;
`;

export const SubTitle = styled.h4`
    margin: 0 0 1rem 0;
  color: #e5e5e5;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
`;

export const TextBody = styled.p`
  margin: 0 0 .3rem 0;
  font-size: ${({blueText}) => blueText ? '1.2rem' : '.9rem'};
  line-height: ${({blueText}) => blueText ? '1.8rem' : ''};
  font-weight: 200;
  color: ${({blueText, pinkText}) => blueText ? 'lightblue': 'yellow' && pinkText ? 'pink' : 'yellow'};

  &.text__body--p {
    color: green;
  }
`;

export const TextBodySecond = styled(TextBody)`
  font-size: 3rem;
`;

export const TextBodyThird = styled(TextBodySecond)`
  font-size: .8rem;
  color: orange;
`;