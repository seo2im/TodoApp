import styled from 'styled-components/native'
import * as Basic from '~/Styles/Basic'

export const View = styled(Basic.View)`
	background-color : white;
`

export const Title = styled(Basic.h1)`
	margin-top : 15px;
	font-size : 40px;
`

export const CatTitle = styled.TouchableOpacity`
	margin-top : 20px;
`

export const CatTitleText = styled(Basic.h1)`
	font-size : 30px;
`

export const TodoSelector = styled(Basic.Horizontal)`
	margin-top : 5px;
	margin-left : 15px;
	align-items : center;	
`

export const TodoTitle = styled(Basic.p)`
	font-size : 18px;
	margin-left : 5px;
`
