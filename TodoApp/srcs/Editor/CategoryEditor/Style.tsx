import styled from 'styled-components/native'
import * as Basic from '~/Styles/Basic'

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
export const CloseWrap = styled.View`
	position : relative;
	top : 10px;
	left : 270px;
`
export const Title = styled(Basic.h1)`
	position : relative;
	left : 30px;
`
export const Input = styled.TextInput`
	font-size : 20px;
	width : 230px;
	margin : 0 auto;
`
export const ButtonWrap = styled.View`
	margin-top : 50px;
`