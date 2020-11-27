import React, { useState } from 'react'
import * as styled from './Style'
import { Close, Ok } from '../../Basic'

const Component = ({ setVisible, todoAdd }) => {
	const [ name, setName ] = useState<string>("");

	return (
		<styled.View>
			<styled.Box>
				<Close onPress={() => setVisible(false)}/>
				<styled.Title>새 할일</styled.Title>
				<styled.Input 
					placeholder="할일 이름"
					value={name}
					onChangeText={value => setName(value)}/>
				<Ok onPress={() => {
						if (name === "")
							return;
						todoAdd(name);setName("");setVisible(false);
					}}/>
			</styled.Box>
		</styled.View>
	)
}

export default Component;