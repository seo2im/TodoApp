import React from 'react'
import { State } from '../../Modules'
import { useDispatch, useSelector } from 'react-redux'
import * as category from '../../Modules/Category'
import * as todo from '../../Modules/Todo'

import Component from './Component'

const Container = ({ route }) => {
	const dispatch = useDispatch();
	const { categories, todos } = useSelector((state : State) => state)

	const todoChange = (id : number) => {
		dispatch(todo.Change({ id }))
	}

	return (
		<Component
			categories={categories} todos={todos}
			todoChange={todoChange}/>
	)
}

export default Container;