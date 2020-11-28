import React from 'react'

import * as _todo from '../../Modules/Todo'
import * as styled from './Style'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../../Modules'

import Component from './Component'

const Container = ({ route, navigation }) => {
	const { id } = route.params;

	const distpatch = useDispatch();
	const todos = useSelector((state : State) => state.todos)

	const todoEdit = (name : string) => {
		distpatch(_todo.Edit({ id, name }));
	}
	const todoDel = () => {
		distpatch(_todo.Del({ id }));
	}

	const goBack = () => navigation.goBack();
	
	return (
		<Component
			todo={todos.find(todo => todo.id === id)}
			todoDel={todoDel}
			goBack={goBack}/>
	)
}

export default Container;