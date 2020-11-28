import React, { useRef, useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import Page from './Page'
import Menu from './Menu/Container'

import { useDispatch } from 'react-redux'
import * as category from './Modules/Category'
import * as todo from './Modules/Todo'
import * as record from './Modules/Record'

import * as storage from './Storage/Storage'

const Navigator = () => {
	const [ visible, setVisible ] = useState<boolean>(false);
	const dispatch = useDispatch();

	const loadData = async () => {
		await storage.getData("categories" ,(data) => dispatch(category.Init(data)));
		await storage.getData("todos", (data) => dispatch(todo.Init(data)));
		await storage.getData("records", (data) => dispatch(record.Init(data)));
	}
	useEffect(() => {
		loadData();
	}, [])
	
	const navRef = useRef(null);

	return (
		<>
			<Menu visible={visible} setVisible={setVisible} navigation={navRef.current}/>
			<NavigationContainer ref={navRef}>
				<Page setVisible={setVisible}/>
			</NavigationContainer>
		</>
	)
}

export default Navigator;