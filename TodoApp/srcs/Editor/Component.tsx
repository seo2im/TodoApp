import React, { useState } from 'react'
import * as styled from './Style'

const Component = ({ setVisible, categoryAdd }) => {
	const [ name, setName ] = useState<string>("");

	return (
		<styled.View>
			<styled.Box>
				<styled.Close onPress={() => setVisible(false)}>
					<styled.CloseText>X</styled.CloseText>
				</styled.Close>
				<styled.Input 
					value={name}
					onChangeText={value => setName(value)}/>
				<styled.Ok onPress={() => {
						categoryAdd(name);setName("");setVisible(false);
					}}>
					<styled.OkText>OK</styled.OkText>
				</styled.Ok>
			</styled.Box>
		</styled.View>
	)
}

export default Component;