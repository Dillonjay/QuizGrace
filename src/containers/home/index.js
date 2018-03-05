import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomePageLayout from '../../layouts/HomePageLayout';
// import Navigation from 'containers/Navigation';
/* Styled Components */
import { StyledDiv, StyledKid } from './styles/styledDiv';


const Home = ({ dispatch, todos }) => (
	<React.Fragment>
		<HomePageLayout
			render={() => {
				return (
					<StyledDiv>
						<StyledKid>
							?
						</StyledKid>
						<StyledKid>
							JS
							<br />
							For this page leave transition, I want to collapse the Navigation bar down until its on top
							of the footer. What comes in behind the nav bar is a cool loader anmation.
						</StyledKid>
						<StyledKid>
							HTML
						</StyledKid>
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
