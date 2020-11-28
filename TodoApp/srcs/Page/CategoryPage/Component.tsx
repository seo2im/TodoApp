import React, { useState } from 'react'
import { PageProp } from '~/Types'
import * as styled from './Style'
import { FlatList } from 'react-native'
import { CheckBox, Add, Button } from '~/Basic'
import { TodoEditor, CategoryEditor } from '~/Editor'

const Component = 
({ category, todos, records, 
categoryDel,todoDel,recordDel,
todoChange,
editLink, todoLink, recordLink, goBack} : PageProp.CategoryPage) => 
{
	const [ catEdit, setCatEdit] = useState<boolean>(false);
	const [ edit, setEdit ] = useState<boolean>(false)

	return (
		<>
		{category ? 
		(<>
		<styled.View>
			<styled.Header>
				<styled.HeaderText>{category.name}</styled.HeaderText>
				<styled.ButtonDiv>
					<Button title="Edit" onPress={() => setCatEdit(true)}/>
					<Button title="Del" onPress={() => {
						todos.forEach(todo => todoDel(todo.id))
						records.forEach(rec => recordDel(rec.id));
						categoryDel(category.id)
						;goBack();
					}}/>
				</styled.ButtonDiv>
			</styled.Header>

			<styled.Title>
				<styled.TitleText>Todo</styled.TitleText>
				<Add onPress={() => setEdit(true)}/>
			</styled.Title>
			<FlatList 
				data={todos}
				keyExtractor={(item, index) => `${index}`}
				renderItem={({item, index}) => (
					<styled.TodoItem>
						<CheckBox state={item.state} change={() => todoChange(item.id)} size={20}/>
						<styled.TodoP onPress={() => todoLink(item.id)}>{item.name}</styled.TodoP>
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
		<CategoryEditor visible={catEdit} setVisible={setCatEdit} category={category}/>
		<TodoEditor visible={edit} setVisible={setEdit} catId={category.id} todo={undefined}/>
		</>)
		: null}
		</>
	)
}

export default Component;