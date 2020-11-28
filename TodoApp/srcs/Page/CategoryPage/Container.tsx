import React from 'react'
import { State } from '../../Modules'
import { useDispatch, useSelector } from 'react-redux'
import * as category from '../../Modules/Category'
import * as todo from '../../Modules/Todo'
import * as record from '../../Modules/Record'

import Component from './Component'

const Container = ({ route, navigation }) => {
	const { catId } = route.params;
	const dispatch = useDispatch();
	const { categories, todos, records } = useSelector((state : State) => state)

	const categoryDel = (id : number) => {
		dispatch(category.Del({ id }));
	}
	const todoDel = (id : number) => {
		dispatch(todo.Del({ id }));
	}
	const recordDel = (id : number) => {
		dispatch(record.Del({ id }));
	}
	const todoChange = (id : number) => {
		dispatch(todo.Change({ id }));
	}
	

	const editLink = (catId : number) => navigation.navigate('RecordEditor', { catId });
	const todoLink = (id : number) => navigation.navigate('TodoPage', { id });
	const recordLink = (recId : number) => navigation.navigate('RecordPage', { recId });
	const goBack = () => navigation.goBack();

	return (
		<Component 
			category={categories.find(cat => cat.id === catId)}
			todos={todos.filter(todo => todo.catId === catId)}
			records={records.filter(todo => todo.catId === catId)}
			categoryDel={categoryDel}todoDel={todoDel}recordDel={recordDel}
			todoChange={todoChange}
			editLink={editLink}todoLink={todoLink}recordLink={recordLink}goBack={goBack}/>
	)
}

export default Container