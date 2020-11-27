import styled from 'styled-components/native'

export const CheckBox = styled.TouchableOpacity`
	width : 10px;
	height : 10px;
	border-width : 1px;
	border-radius : 1px;

	background-color : ${({ check } : { check : boolean}) => check ? 'blue' : 'white'};
`