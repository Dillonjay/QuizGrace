import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: grid;
  grid: repeat(3,1fr) / 1fr;
  grid-column-gap: 100px;
  padding: 20px;
  height: calc(100vh - 170px);
  @media (min-width: 700px) {
    grid: repeat(8, 1fr) / repeat(3, 1fr);
    grid-column-gap: 100px;
  }
  @media (min-width: 1175px) {
    padding: 0 125px;
    grid: repeat(8, 1fr) / repeat(3, 1fr);
    grid-column-gap: 100px;
  }
`;

export const StyledKid = styled.div`
  background: #ffffff;
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.11);
  font-family: "chalkboard SE";
  transition: transform ease 1s;
  &:hover {
    cursor: pointer;
    transform: scale(1.07);
  }
  &:nth-child(1) {
    grid-column: 1 / 2;
    grid-row: 2 / span 6;
    @media (min-width: 700px) {
      grid-column: 1 / 2;
      grid-row: 2 / span 6;
    }
    @media (min-width: 1175px) {
      grid-column: 1 / 2;
      grid-row: 2 / span 6;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 10em;
    }
  }
  &:nth-child(2) {
    grid-column: 2 / 3;
    grid-row: 2 / span 6;
    @media (min-width: 700px) {
      grid-column: 2 / 3;
      grid-row: 2 / span 6;
    }
    @media (min-width: 1175px) {
      grid-column: 2 / 3;
      grid-row: 2 / span 6;
    }
  }
  &:nth-child(3) {
    grid-column: 3 / 4;
    grid-row: 2 / span 6;
    @media (min-width: 700px) {
      grid-column: 3 / 4;
      grid-row: 2 / span 6;
    }
    @media (min-width: 1175px) {
      grid-column: 3 / 4;
      grid-row: 2 / span 6;
    }
  }
`;
