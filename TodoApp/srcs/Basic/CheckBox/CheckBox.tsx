import React, { useState } from 'react'
import * as styled from './Style';

const CheckBox = ({ state, change }) => {
	return (
		<>
			<styled.CheckBox check={state}
				onPress={() => change()} />
		</>
	)
}

export default CheckBox