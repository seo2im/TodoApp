import React from 'react'
import * as styled from './Style'

type Props = {
	onPress : (any) => void
}

const Button = ({onPress} : Props) => {
	return (
		<styled.Close onPress={onPress}>
			<styled.ButtonText>X</styled.ButtonText>
		</styled.Close>
	)
}

export default Button;