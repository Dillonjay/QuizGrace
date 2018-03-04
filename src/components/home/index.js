import React, { Component } from 'react';
import { connect } from 'react-redux';
import StyledDiv from './styles/styledDiv';

if(process.env.WEBPACK) require('./index.scss');

const Home = ({ dispatch, todos }) => (
	<div className='home'>
		<StyledDiv>
			<h1>Styled Components </h1>
		</StyledDiv>
	</div>
);

export default connect((state) => {
	const { todos } = state;
	return { todos };
})(Home);
