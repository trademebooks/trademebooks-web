import React, { Component } from 'react';
import { connect } from 'react-redux';

import ChatProvider from './Context/ChatProvider';

import styled from 'styled-components';
import { Flex, } from 'rebass';

// components
import PrivateRoute from '../../Routing/PrivateRoute';
import SidebarContainer from './SidebarContainer';
import ChatBoxContainer from './ChatBoxContainer';

const FlexWrapper = styled(Flex)`
    flex: 1;
`;

class Wrapper extends Component {
	state = {}

	render() {
		const { authReducer: { onlineUsers, user, } } = this.props;

		return (
			<ChatProvider>
				<FlexWrapper mx={0}>
					<SidebarContainer
						nickname={user.data.nickname}
						onlineUsers={onlineUsers}
					/>
					<PrivateRoute
						exact
						path="/chat/:id?"
						component={ChatBoxContainer}
					/>
				</FlexWrapper>
			</ChatProvider>
		);
	}
}

const mapStateToProps = state => ({
	authReducer: state.auth,
});

export default connect(mapStateToProps)(Wrapper);