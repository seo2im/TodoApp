import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { MainPage, CategoryPage, RecordPage } from './Page'

import { useDispatch } from 'react-redux'
import * as category from './Modules/Category'
import * as todo from './Modules/Todo'
import * as record from './Modules/Record'

const Stack = createStackNavigator();

const Navigator = () => {
	const dispatch = useDispatch();
	dispatch(category.Init({}));
	dispatch(todo.Init({}));
	dispatch(record.Init({}));

	return (
		<NavigationContainer>
			<Stack.Navigator headerMode="none">
				<Stack.Screen name="MainPage" component={MainPage} />
				<Stack.Screen name="CategoryPage" component={CategoryPage} />
				<Stack.Screen name="RecordPage" component={RecordPage} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Navigator;