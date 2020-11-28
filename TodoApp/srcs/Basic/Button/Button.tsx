import React from 'react'
import * as styled from './Style'

type Props = {
	title : string,
	onPress : (any) => void
}

const Button = ({title, onPress} : Props) => {
	return (
		<styled.Ok onPress={onPress}>
			<styled.ButtonText>{title}</styled.ButtonText>
		</styled.Ok>
	)
}

export default Button;