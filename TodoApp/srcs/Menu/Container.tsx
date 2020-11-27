import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { State } from '../Modules'
import { Modal } from '../Basic';

import Component from './Component'

const Container = ({visible, setVisible}) => {
	const categories = useSelector((state : State) => state.categories);

	return (
		<Modal visible={visible} setVisible={setVisible}>
			<Component
				categories={categories}
				setVisible={setVisible} />
		</Modal>
	)
}

export default Container;