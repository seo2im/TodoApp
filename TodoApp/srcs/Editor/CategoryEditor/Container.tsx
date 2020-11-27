import React from 'react'
import Component from './Component'

import { Modal } from '../../Basic'
import { useDispatch } from 'react-redux'
import * as category from '../../Modules/Category'

const Container = ({ visible, setVisible }) => {
	const dispatch = useDispatch();

	const categoryAdd = (name : string) => {
		dispatch(category.Add({ name }))
	}

	return (
		<Modal visible={visible} setVisible={setVisible}>
			<Component
				setVisible={setVisible}
				categoryAdd={categoryAdd}/>
		</Modal>
	)
}

export default Container;