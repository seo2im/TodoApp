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

export const ButtonWrap = styled.View`
	background-color : white;
	border-radius : 10px;
	elevation : 2;

	position : absolute;
	top : 90%;
	left : 80%;
`