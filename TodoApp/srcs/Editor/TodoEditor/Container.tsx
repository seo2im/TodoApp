import React from 'react'
import Component from './Component'

import { Modal } from '../../Basic'
import { useDispatch } from 'react-redux'
import * as _todo from '../../Modules/Todo'

const Container = ({ visible, setVisible, catId, todo }) => {
	const dispatch = useDispatch();

	const todoAdd = (name : string) => {
		dispatch(_todo.Add({ catId, name }));
	}
	const todoEdit = (id : number, name : string) => {
		dispatch(_todo.Edit({ id, name }));
	}

	return (
		<Modal visible={visible} setVisible={setVisible}>
			<Component
				setVisible={setVisible}
				todoAdd={todoAdd}
				todoEdit={todoEdit}
				todo={todo}/>
		</Modal>
	)
}

export default Container;