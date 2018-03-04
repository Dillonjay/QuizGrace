import styled from 'styled-components';

export const StyledLinkDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledLink = styled.p`
  font-family: "chalkboard SE";
  color: #acacac;
  font-size: 1.5em;
  padding: 0;
  margin: 0;
  width: 100%;
  text-align: center;
  border-right: solid 3px #acacac;
  &:hover {
    cursor: pointer;
    color: #93c4d4;
  }
`;
