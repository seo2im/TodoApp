import styled from 'styled-components/native'
import * as Basic from '../../Styles/Basic'

export const View = styled.View`
	height : 50px;
	elevation : 1.5;
	background-color : white;

	flex-direction : row;
	align-items : center;
`

export const Title = styled(Basic.h1)`
	line-height : 50px;
`

export const Menu = styled.TouchableOpacity`
	width : 50px;
	align-items : center;
`

export const MenuT = styled(Basic.h1)`
	font-size : 30px;
	line-height : 50px;
`