import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import Page from './Page'
import { Menu } from './Basic'

import { useDispatch } from 'react-redux'
import * as category from './Modules/Category'
import * as todo from './Modules/Todo'
import * as record from './Modules/Record'

const Navigator = () => {
	const dispatch = useDispatch();
	dispatch(category.Init({}));
	dispatch(todo.Init({}));
	dispatch(record.Init({}));

	return (
		<NavigationContainer>
			<Page />
		</NavigationContainer>
	)
}

export default Navigator;