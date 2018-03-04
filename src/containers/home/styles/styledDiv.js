import styled from 'styled-components';

export const StyledDiv = styled.div`
  border: solid red;
  height: 100%;

  display: grid;
  grid: 100px 100px / 100px auto 100px 100px;
  grid-gap: 10px;
`;

export const StyledKid = styled.div`
  background: green;
  border: solid black;
`;
