import styled from 'styled-components';

export const StyledNav = styled.div`
  height: 75px;
  width: 100vw;
  position: fixed;
  z-index: 10;
  top: 0;
  display: grid;
  grid-template-columns: 1fr 3fr 2fr;
  grid-gap: 10px;
  box-shadow: 0 3px 4px 0 rgba(0,0,0,0.11);
`;

export const StyledLinks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export const StyledLogoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledNavCenter = styled.div`
`;

