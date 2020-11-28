import React from 'react'
import * as styled from './Style'

type Props = {
	title : string,
	onPress : (any) => void
}

const Button = ({title, onPress} : Props) => {
	return (
		<styled.Button onPress={onPress}>
			<styled.ButtonText>{title}</styled.ButtonText>
		</styled.Button>
	)
}

export default Button;