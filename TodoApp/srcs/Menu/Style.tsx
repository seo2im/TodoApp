import styled from 'styled-components/native'
import * as Basic from '../Styles/Basic'

export const View = styled(Basic.Horizontal)`
	width : 100%;
	height : 100%;
`
export const Menu = styled.View`
	width : 60%;
	height : 100%;
	padding : 10px;

	background-color : white;
`
export const TitleDiv = styled(Basic.Horizontal)`
	padding-bottom : 10px;
	margin-bottom : 10px;
	
	justify-content : space-between;
	border-bottom-width : 1px;
	border-bottom-color : grey;
`
export const AddButton = styled.TouchableOpacity`
	
`
export const ButtonText = styled(Basic.h1)`

`
export const Title = styled(Basic.h1)`
	font-size : 20px;
	font-weight : bold;
	
`
export const Cat = styled(Basic.h1)`
	font-size : 15px;
`
export const OutSide = styled.TouchableOpacity`
	width : 40%;
	height : 100%;

	background-color : rgba(0,0,0, 0.5);
`