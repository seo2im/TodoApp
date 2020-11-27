import styled from 'styled-components/native'
import * as Basic from '../../Styles/Basic'

export const View = styled.View`
	width : 100%;
	height : 100%;

	background-color : rgba(0, 0, 0, 0.5);
`

export const Box = styled.View`
	width : 300px;
	height : 250px;

	background-color : white;
	border-radius : 15px;
	
	margin : auto;
	position : relative;

`
export const Close = styled.TouchableOpacity`
	position : relative;
	top : 10px;
	left : 270px;
`
export const CloseText = styled.Text`
	font-size : 20px;
`
export const Title = styled(Basic.h1)`
	position : relative;
	left : 30px;
`
export const Input = styled.TextInput`
	width : 200px;
	margin : 0 auto;
`