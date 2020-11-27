import React from 'react'
import Component from './Component'

import { Modal } from '../../Basic'
import { useDispatch } from 'react-redux'
import * as todo from '../../Modules/Category'

const Container = ({ visible, setVisible }) => {
	const dispatch = useDispatch();

	const todoAdd = (name : string) => {
		dispatch(todo.Add({ name }))
	}

	return (
		<Modal visible={visible} setVisible={setVisible}>
			<Component
				setVisible={setVisible}
				todoAdd={todoAdd}/>
		</Modal>
	)
}

export default Container;