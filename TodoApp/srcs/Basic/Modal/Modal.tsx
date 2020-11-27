import React from 'react'
import { Modal } from 'react-native'

const Component = ({children, visible, setVisible}) => (
	<Modal
		visible={visible}
		transparent={true}
		onRequestClose={() => setVisible(false)}>
		{children}
	</Modal>
)

export default Component;