import React from 'react'
import { State } from '../../Modules'
import { useDispatch, useSelector } from 'react-redux'
import * as category from '../../Modules/Category'

import Component from './Component'

const Container = ({ route }) => {
	const dispatch = useDispatch();
	const { categories, todos } = useSelector((state : State) => state)

	const categoryAdd = (name : string) => {
		dispatch(category.Add({name}))
	}

	return (
		<Component
			categories={categories} todos={todos}
			categoryAdd={categoryAdd}/>
	)
}

export default Container;