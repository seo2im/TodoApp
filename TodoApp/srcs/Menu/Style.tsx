import styled from 'styled-components/native'
import * as Basic from '~/Styles/Basic'

export const View = styled(Basic.Horizontal)`
	width : 100%;
	height : 100%;
	background-color : rgba(0,0,0, 0.5);
`
export const Menu = styled.View`
	width : 60%;
	height : 100%;
	padding : 15px;

	background-color : white;
`
export const TitleDiv = styled(Basic.Horizontal)`
	margin-top : 15px;
	
	justify-content : space-between;
	border-bottom-width : 1px;
	border-bottom-color : grey;
`
export const AddButton = styled.TouchableOpacity`
	
`
export const ButtonText = styled(Basic.h1)`

`
export const Title = styled(Basic.h1)`
	font-size : 25px;
	font-weight : bold;

	
`
export const Cat = styled(Basic.h1)`
	margin-top : 10px;
	margin-left : 15px;
	
	font-size : 20px;
`
export const OutSide = styled.TouchableOpacity`
	width : 40%;
	height : 100%;

	background-color : rgba(0,0,0,0);
`