import React from 'react'

import * as styled from './Style'

const Header = ({ func, }) => {
	return (
		<styled.View>
			<styled.Menu 
				onPress={() => func()}>
				<styled.MenuT>=</styled.MenuT>
			</styled.Menu>
			<styled.Title>Your Record</styled.Title>
		</styled.View>
	)
}

export default Header;
