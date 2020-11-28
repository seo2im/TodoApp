import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { State } from '~/Modules'
import { Modal } from '~/Basic';

import Component from './Component'

const Container = ({visible, setVisible, navigation}) => {
	const categories = useSelector((state : State) => state.categories);
	
	const link = (catId : number, catName : string) => 
		navigation.navigate('CategoryPage' , {catId, catName})

	return (
		<Modal visible={visible} setVisible={setVisible}>
			<Component
				categories={categories}
				setVisible={setVisible}
				link={link} />
		</Modal>
	)
}

export default Container;