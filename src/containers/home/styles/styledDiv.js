import styled from 'styled-components';

export const StyledDiv = styled.div`
  border: solid red;
  display: grid;
  grid: 100px 100px / 100px auto 100px 100px;
  grid-gap: 10px;
  height: auto;
`;

export const StyledKid = styled.div`
  background: green;
  border: solid black;
  line-height: 100px;
  font-family: "chalkboard SE";
`;
