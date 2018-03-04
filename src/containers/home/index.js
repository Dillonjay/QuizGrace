import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomePageLayout from '../../layouts/HomePageLayout';
// import Navigation from 'containers/Navigation';
/* Styled Components */
import { StyledDiv, StyledKid } from './styles/styledDiv';

if(process.env.WEBPACK) require('./index.scss');

const Home = ({ dispatch, todos }) => (
	<React.Fragment>
		<HomePageLayout
			render={() => {
				return (
					<StyledDiv>
					<StyledKid />
					<StyledKid />
					<StyledKid />
					<StyledKid />
					<StyledKid />
					<StyledKid />
					<StyledKid />
					<StyledKid />
					<StyledKid />
				</StyledDiv>
				);
			}}
		/>
	</React.Fragment>
);

export default connect((state) => {
	const { todos } = state;
	return { todos };
})(Home);