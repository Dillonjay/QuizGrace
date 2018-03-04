import React, { Component } from 'react';

/* StyledComponents */
import { StyledNav, StyledLogo, StyledNavCenter, StyledLinks } from './styles/StyledNav';
import { StyledLinkDiv, StyledLink } from './styles/StyledLink';
class componentName extends Component {
  render() {
    return (
      <StyledNav>
        <StyledLogo />
        <StyledNavCenter />
        <StyledLinks>
          <StyledLinkDiv>
            <StyledLink>
              HOME
            </StyledLink>
          </StyledLinkDiv>
          <StyledLinkDiv>
            <StyledLink>
              JS
            </StyledLink>
          </StyledLinkDiv>
          <StyledLinkDiv>
            <StyledLink>
              HTML
            </StyledLink>
          </StyledLinkDiv>
          <StyledLinkDiv>
            <StyledLink>
              CSS
            </StyledLink>
          </StyledLinkDiv>
        </StyledLinks>
      </StyledNav>
    );
  }
}

export default componentName;
