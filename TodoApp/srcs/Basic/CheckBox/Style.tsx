import styled from 'styled-components/native'

export const CheckBox = styled.TouchableOpacity<{size : number, check : boolean}>`
	width : ${({ size }) => size}px;
	height : ${({ size }) => size}px;

	border-color : ${({ check }) => check ? '#aee6e6' : 'black'};
	border-width : 1.5px;
	
	border-radius : 3px;

	background-color : ${({ check }) => check ? '#aee6e6' : 'white'};
`