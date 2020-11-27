import React, { useState } from 'react'
import * as styled from './Style'
import { Close, Ok } from '../../Basic'

const Component = ({ setVisible, categoryAdd }) => {
	const [ name, setName ] = useState<string>("");

	return (
		<styled.View>
			<styled.Box>
				<Close onPress={() => setVisible(false)}/>
				<styled.Title>새 카테고리</styled.Title>
				<styled.Input 
					placeholder="카테고리 이름"
					value={name}
					onChangeText={value => setName(value)}/>
				<Ok onPress={() => {
						if (name === "")
							return;
						categoryAdd(name);setName("");setVisible(false);
					}}/>
			</styled.Box>
		</styled.View>
	)
}

export default Component;