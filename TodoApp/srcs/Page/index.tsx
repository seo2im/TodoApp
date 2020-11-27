import MainPage from './MainPage/Container'
import CategoryPage from './CategoryPage/Container'
import RecordPage from './RecordPage/Container'
import RecordEditor from './RecordEdit/Container'
export { MainPage, CategoryPage, RecordPage };

import React, { useState, useRef } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Header } from '../Basic'
import Menu from '../Menu/Container'

import * as category from '../Modules/Category'
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../Modules';

const Stack = createStackNavigator();

const Page = ({setVisible}) => {
	const dispatch = useDispatch();
	const categories = useSelector((state : State) => state.categories)

	const categoryAdd = (name : string) => {
		dispatch(category.Add({ name }))
	}

	return (
		<Stack.Navigator screenOptions={{
			header : ({}) => (<Header func={() => setVisible(true)}/>)}}>
			<Stack.Screen name="MainPage" component={MainPage} />
			<Stack.Screen name="CategoryPage" component={CategoryPage} />
			<Stack.Screen name="RecordPage" component={RecordPage} />
			<Stack.Screen name="RecordEditor" component={RecordEditor} />
		</Stack.Navigator>
	)
}

export default Page