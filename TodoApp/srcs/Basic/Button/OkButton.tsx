import React from 'react'
import * as styled from './Style'

type Props = {
	onPress : (any) => void
}

const Button = ({onPress} : Props) => {
	return (
		<styled.Ok onPress={onPress}>
			<styled.ButtonText>OK</styled.ButtonText>
		</styled.Ok>
	)
}

export default Button;