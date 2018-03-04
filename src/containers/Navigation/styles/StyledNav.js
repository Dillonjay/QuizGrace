import styled from 'styled-components';

export const StyledNav = styled.div`
  border: solid black;
  height: 75px;
  width: 100%;
  position: fixed;
  z-index: 10;
  top: 0;
  display: grid;
  grid-template-columns: 1fr 3fr 2fr;
  grid-gap: 10px;
`;

export const StyledLinks = styled.div`
  border: solid red;
`;

export const StyledLogo = styled.div`
  border: solid blue;
`;

export const StyledNavCenter = styled.div`
  border: solid yellow;
`;

