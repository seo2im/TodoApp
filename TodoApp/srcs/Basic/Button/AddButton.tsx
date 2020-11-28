import React from 'react'
import * as styled from './Style'

type Props = {
	onPress : (any) => void
}

const Button = ({onPress} : Props) => {
	return (
		<styled.AddButton onPress={onPress}>
			<styled.ButtonTap>+</styled.ButtonTap>
		</styled.AddButton>
	)
}

export default Button;
