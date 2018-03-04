import React, { Component } from 'react';

/* StyledComponents */
import { StyledNav, StyledLogoDiv, StyledNavCenter, StyledLinks } from './styles/StyledNav';
import { StyledLinkDiv, StyledLink } from './styles/StyledLink';
import StyledLogo from './styles/StyledLogo';
class componentName extends Component {
  render() {
    return (
      <StyledNav>
        <StyledLogoDiv>
          <StyledLogo>
            QuizGrace
          </StyledLogo>
        </StyledLogoDiv>
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
