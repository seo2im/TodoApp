import styled from 'styled-components/native'
import * as Basic from '../Styles/Basic'



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

export const Input = styled.TextInput`
	width : 100px;
	border-bottom-width : 1px;
	margin : 0 auto;
`

export const Ok = styled.TouchableOpacity`
	border-width : 1px;
	margin : 20px auto;
`

export const OkText = styled.Text`
	
`