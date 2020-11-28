import React from 'react'

import * as styled from './Style'

const Header = ({ func }) => {
	return (
		<styled.View>
			<styled.Menu 
				onPress={() => func()}>
				<styled.MenuT>=</styled.MenuT>
			</styled.Menu>
			<styled.Title>Todo Recorder</styled.Title>
		</styled.View>
	)
}

export default Header;
