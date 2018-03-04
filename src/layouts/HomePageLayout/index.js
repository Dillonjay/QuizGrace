import React, { Component } from 'react';
import Navigation from '../../containers/Navigation';

import StyledPageWrapper from './styles/StyledPageWrapper';
class componentName extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <StyledPageWrapper>
          {this.props.render()}
        </StyledPageWrapper>
      </React.Fragment>
    );
  }
}

export default componentName;
