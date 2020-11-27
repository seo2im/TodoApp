import React from 'react'
import { State } from '../../Modules'
import { useDispatch, useSelector } from 'react-redux'
import * as category from '../../Modules/Category'
import * as todo from '../../Modules/Todo'
import * as record from '../../Modules/Record'

import Component from './Component'

const Container = ({ route, navigation }) => {
	const { catId, catName } = route.params;
	const dispatch = useDispatch();
	const { categories, todos, records } = useSelector((state : State) => state)

	const categoryEdit = (id : number, name : string) => {
		dispatch(category.Edit({ id, name }));
	}
	const categoryDel = (id : number) => {
		dispatch(category.Del({ id }));
	}
	const todoAdd = (catId : number, name : string) => {
		dispatch(todo.Add({ catId, name }));
	}
	const todoEdit = (id : number, name : string) => {
		dispatch(todo.Edit({ id, name }));
	}
	const todoChange = (id : number) => {
		dispatch(todo.Change({ id }));
	}
	const todoDel = (id : number) => {
		dispatch(todo.Del({ id }));
	}

	const editLink = (catId : number) => navigation.navigate('RecordEditor', { catId });
	const recordLink = (recId : number) => navigation.navigate('RecordPage', { recId });

	return (
		<Component 
			category={categories.find(cat => cat.id === catId)}
			todos={todos.filter(todo => todo.catId === catId)}
			records={records.filter(todo => todo.catId === catId)}
			categoryEdit={categoryEdit}categoryDel={categoryDel}
			todoAdd={todoAdd}todoEdit={todoEdit}todoChange={todoChange}todoDel={todoDel}
			editLink={editLink} recordLink={recordLink}/>
	)
}

export default Container