import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

type Props = {
	onPress : (any) => void
	title : string,
	fontSize : number
}

const Button = ({onPress, title, fontSize} : Props) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<Text style={{fontSize : fontSize}}>{title}</Text>
		</TouchableOpacity>
	)
}

export default Button;
