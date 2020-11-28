import styled from 'styled-components/native'
import * as Basic from '../../Styles/Basic'

export const View = styled(Basic.View)`

`

export const Header = styled(Basic.Horizontal)`
	justify-content : space-between;
`
export const HeaderText = styled(Basic.h1)`

`
export const ButtonDiv = styled(Basic.Horizontal)`

`

export const Title = styled(Basic.Horizontal)`
	width : 100%;
	justify-content : space-between;

	border-bottom-width : 1px;
`
export const TitleText = styled(Basic.h1)`
	font-size : 23px;
`
export const TodoItem = styled(Basic.Horizontal)`
	align-items : center;
`
export const TodoP = styled(Basic.p)`
	font-weight : bold;
	margin-left : 10px;
`

export const RecordItem = styled.TouchableOpacity`
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