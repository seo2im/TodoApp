import React from 'react'
import { State } from '~/Modules'
import { useDispatch, useSelector } from 'react-redux'
import * as todo from '~/Modules/Todo'

import Component from './Component'

const Container = ({ navigation }) => {
	const dispatch = useDispatch();
	const { categories, todos } = useSelector((state : State) => state)

	const todoChange = (id : number) => {
		dispatch(todo.Change({ id }))
	}
	const link = (catId : number, catName : string) => navigation.navigate('CategoryPage', { catId })

	return (
		<Component
			categories={categories} todos={todos}
			todoChange={todoChange} link={link}/>
	)
}

export default Container;