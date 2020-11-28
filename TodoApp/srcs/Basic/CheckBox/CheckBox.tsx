import React, { useState } from 'react'
import * as styled from './Style';

const CheckBox = ({ state, change, size }) => {
	return (
		<>
			<styled.CheckBox size={size} check={state}
				onPress={() => change()} />
		</>
	)
}

export default CheckBox