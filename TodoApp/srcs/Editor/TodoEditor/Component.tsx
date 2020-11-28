import React, { useState } from 'react'
import * as styled from './Style'
import { Close, Button } from '../../Basic'
import { tTodo } from '../../Types/DataType'

type Props = {
	setVisible : (visible : boolean) => void,
	todoAdd : (name : string) => void,
	todoEdit : (id : number, name : string) => void,
	todo? : tTodo
}

const Component = ({ setVisible, todoAdd, todoEdit, todo } : Props) => {
	const [ name, setName ] = useState<string>(todo ? todo.name : "");

	return (
		<styled.View>
			<styled.Box>
				<Close onPress={() => setVisible(false)}/>
				<styled.Title>{`${todo ? "변경" : "새 할일"}`}</styled.Title>
				<styled.Input 
					placeholder="할일 이름"
					value={name}
					onChangeText={value => setName(value)}/>
				<Button title="OK" onPress={() => {
						if (name === "")
							return;
						todo ? todoEdit(todo.id, name) : todoAdd(name);
						setName("");setVisible(false);
					}}/>
			</styled.Box>
		</styled.View>
	)
}

export default Component;