import React from 'react'
import { Modal, FlatList } from 'react-native'

import { PageProp } from '../../Types'
import * as styled from './Style'

const Menu = 
({ visible, setVisible, categories, categoryAdd } : PageProp.Menu) => {
	return (
		<Modal
			transparent={true}
			visible={visible}
			onRequestClose={() => setVisible(false)}>
			<styled.View>
				<styled.Menu>
					<styled.TitleDiv>
						<styled.Title>Category</styled.Title>
						<styled.AddButton>
							<styled.ButtonText>+</styled.ButtonText>
						</styled.AddButton>
					</styled.TitleDiv>
					<FlatList 
						data={categories}
						keyExtractor={(item, index) => `${index}`}
						renderItem={({ item, index }) => (
						<styled.Cat>{item.name}</styled.Cat>
						)}/>
				</styled.Menu>
				<styled.OutSide
					activeOpacity={1}
					onPress={() => setVisible(false)}/>
			</styled.View>
			
		</Modal>
	)	
}

export default Menu;