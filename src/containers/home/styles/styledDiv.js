import styled from 'styled-components';

export const StyledDiv = styled.div`
  border: solid red;
  display: grid;
  grid: repeat(3, 100px) / repeat(2, 1fr 2fr);
  grid-gap: 10px;
  height: auto;
`;

export const StyledKid = styled.div`
  background: green;
  border: solid black;
  line-height: 100px;
  font-family: "chalkboard SE";
`;
