import React, { useState } from 'react'
import * as styled from './Style'
import { FlatList } from 'react-native'
import { PageProp } from '../Types'

import Editor from '../Editor/Container'

const Component = ({categories, setVisible} : PageProp.Menu) => {
	const [ edit, setEdit ] = useState<boolean>(false);

	return (
		<>
		<styled.View>
			<styled.Menu>
				<styled.TitleDiv>
					<styled.Title>Category</styled.Title>
					<styled.AddButton onPress={() => setEdit(true)}>
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
		<Editor visible={edit} setVisible={setEdit} />
		</>
	)
}

export default Component;