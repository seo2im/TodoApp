import React from 'react'
import Component from './Component'

import { Modal } from '~/Basic'
import { useDispatch } from 'react-redux'
import * as _category from '~/Modules/Category'

const Container = ({ visible, setVisible, category }) => {
	const dispatch = useDispatch();

	const categoryAdd = (name : string) => {
		dispatch(_category.Add({ name }))
	}
	const categoryEdit = (id : number, name : string) => {
		dispatch(_category.Edit({ id, name }))
	}

	return (
		<Modal visible={visible} setVisible={setVisible}>
			<Component
				setVisible={setVisible}
				categoryAdd={categoryAdd}
				categoryEdit={categoryEdit}
				category={category}/>
		</Modal>
	)
}

export default Container;