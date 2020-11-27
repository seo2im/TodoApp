import React from 'react'
import { PageProp } from '../../Types'
import * as styled from './Style'
import { FlatList } from 'react-native'
import { CheckBox } from '../../Basic'

const Component = 
({ categories, todos, todoChange, link} : PageProp.MainPage) => 
{
	return (
		<styled.View>
			<styled.Title>Main Page</styled.Title>
			<FlatList
				data={categories}
				keyExtractor={(item, index) => `${index}`}
				renderItem={({item, index}) => {
					const todoList = todos.filter(todo => todo.catId === item.id)
					return (
						<>
							<styled.CatTitle onPress={() => link(item.id, item.name)}>
								<styled.CatTitleText>{item.name}</styled.CatTitleText>
							</styled.CatTitle>
							<FlatList
								data={todoList}
								keyExtractor={(item, index) => `${index}`}
								renderItem={({item, index}) => (
									<styled.TodoSelector>
										<CheckBox state={item.state} change={() => todoChange(item.id)}/>
										<styled.TodoTitle>{item.name}</styled.TodoTitle>
									</styled.TodoSelector>
								)}/>
						</>
					)
				}}
			/>
		</styled.View>
	)
}

export default Component;