import React from 'react'
import { State } from '../../Modules'
import { useDispatch, useSelector } from 'react-redux'
import * as category from '../../Modules/Category'
import * as todo from '../../Modules/Todo'
import * as record from '../../Modules/Record'

import Component from './Component'

const Container = ({ route }) => {
	const { catId, catName } = route.param
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
	const todoDone = (id : number) => {
		dispatch(todo.Done({ id }));
	}
	const todoDel = (id : number) => {
		dispatch(todo.Del({ id }));
	}
	const recordAdd = (catId : number, name : string, content : string) => {
		dispatch(record.Add({ catId, name, content }));
	}

	return (
		<Component 
			category={categories.find(cat => cat.id === catId)}
			todos={todos.filter(todo => todo.catId === catId)}
			records={records.filter(todo => todo.catId === catId)}
			categoryEdit={categoryEdit}categoryDel={categoryDel}
			todoAdd={todoAdd}todoEdit={todoEdit}todoDone={todoDone}todoDel={todoDel}
			recordAdd={recordAdd}/>
	)
}

export default Container