import styled from 'styled-components/native'
import * as Basic from '~/Styles/Basic'

export const View = styled(Basic.View)`

`

export const Header = styled(Basic.Horizontal)`
	margin-top : 20px;
	
	justify-content : space-between;
	align-items : flex-start;
`
export const HeaderText = styled(Basic.h1)`
	font-size : 30px;
`
export const ButtonDiv = styled(Basic.Horizontal)`
	width : 120px;
	height : 33px;
`

export const Title = styled(Basic.Horizontal)`
	width : 100%;
	margin-top : 20px;
`
export const TitleText = styled(Basic.h1)`
	margin-right : 20px;
	font-size : 25px;
`
export const TodoItem = styled(Basic.Horizontal)`
	margin-top : 5px;
	margin-left : 10px;
	
	align-items : center;
`
export const TodoP = styled(Basic.p)`
	font-weight : bold;
	margin-left : 15px;
`

export const RecordItem = styled.TouchableOpacity`
	margin-left : 10px;
	flex-direction : row;
	align-items : flex-end;

`
export const recordDate = styled(Basic.p)`
	font-size : 15px;
	margin-right : 20px;
`
export const recordTitle = styled(Basic.p)`
	font-weight : bold;
`