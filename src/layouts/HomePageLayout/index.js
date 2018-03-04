import React, { Component } from 'react';
import Navigation from '../../containers/Navigation';

import StyledPageWrapper from './styles/StyledPageWrapper';
import StyledFooter from './styles/StyledFooter';
class componentName extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <StyledPageWrapper>
          {this.props.render()}
        </StyledPageWrapper>
        <StyledFooter />
      </React.Fragment>
    );
  }
}

export default componentName;
