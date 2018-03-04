import styled from 'styled-components';

export const StyledLinkDiv = styled.div`
  display: flex;
  align-items: center;
  position: relative;
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
  /* &:after {
    content: '';
    height: 4px;
    width: 100%;
    position: absolute;
    bottom: 0;
    right: 0;
    background: #acacac;
  } */
  &:hover {
    cursor: pointer;
    color: #93c4d4;
  }
`;
