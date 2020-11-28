import React, { useState } from 'react'
import { PageProp } from '../../Types'
import * as styled from './Style'
import { FlatList } from 'react-native'
import { CheckBox, Add } from '../../Basic'
import { TodoEditor } from '../../Editor'

const Component = 
({ category, todos, records, 
categoryEdit, categoryDel,
todoAdd, todoDel, todoChange, todoEdit,
editLink, recordLink} : PageProp.CategoryPage) => 
{
	const [ edit, setEdit ] = useState<boolean>(false)

	return (
		<>
		<styled.View>
			<styled.Header>{category.name}</styled.Header>
			<styled.Title>
				<styled.TitleText>Todo</styled.TitleText>
				<Add onPress={() => setEdit(true)}/>
			</styled.Title>
			<FlatList 
				data={todos}
				keyExtractor={(item, index) => `${index}`}
				renderItem={({item, index}) => (
					<styled.TodoItem>
						<CheckBox state={item.state} change={() => todoChange(item.id)}/>
						<styled.TodoP>{item.name}</styled.TodoP>
					</styled.TodoItem>
				)}
				/>
			<styled.Title>
				<styled.TitleText>Records</styled.TitleText>
				<Add onPress={() => editLink(category.id)}/>
			</styled.Title>
			<FlatList 
				data={records}
				keyExtractor={(item, index) => `${index}`}
				renderItem={({item, index}) => (
					<styled.RecordItem onPress={() => recordLink(item.id)}>
						
							<styled.recordDate>{item.date}</styled.recordDate>
							<styled.recordTitle>{item.name}</styled.recordTitle>
						
					</styled.RecordItem>
				)}
				/>
		</styled.View>
		<TodoEditor visible={edit} setVisible={setEdit}/>
		</>
	)
}

export default Component;