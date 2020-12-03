import React, { useState } from 'react'
import { tTodo } from '~/Types/DataType'

import * as styled from './Style'
import { Button, Alert } from '~/Basic'
import { TodoEditor } from '~/Editor' 

type Props = {
	todo : tTodo,
	todoDel : () => void,
	goBack : () => void,
}

const Component = ({ todo, todoDel, goBack } : Props) => {
	const [ visible, setVisible ] = useState<boolean>(false);

	return (
		<>
		{todo ?
		<>
		<styled.View>
			<styled.Title>
				<styled.TitleText>Todo</styled.TitleText>
				<styled.buttonDiv>
					<Button title="Edit" onPress={() => setVisible(true)}/>
					<Button title="Del" onPress={() => Alert(() => {
						todoDel();goBack();
					})}/>
				</styled.buttonDiv>
			</styled.Title>
			<styled.Date>등록일 {todo.date}</styled.Date>
			<styled.Content>{todo.name}</styled.Content>
		</styled.View>
		<TodoEditor visible={visible} setVisible={setVisible} catId={todo.catId} todo={todo}/>
		</> : null}
		</>
	)
}

export default Component;