import styled from 'styled-components/native'
import * as Basic from '../../Styles/Basic'


export const View = styled(Basic.View)`
	position : relative;
`

export const Title = styled.TextInput`
	font-size : 25px;
	font-weight : bold;
`

export const Content = styled.TextInput`
	font-size : 20px;
`

export const BottomAdd = styled.View`
	width : 70px;
	height : 70px;
	border-radius : 35px;
	background-color : blue;
	elevation : 2;

	position : absolute;
	top : 85%;
	left : 80%;

	flex-direction : row;
	align-items : center;
	justify-content : center;
`