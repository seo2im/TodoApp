import React, { useRef, useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import Page from './Page'
import Menu from './Menu/Container'

import { useDispatch } from 'react-redux'
import * as category from './Modules/Category'
import * as todo from './Modules/Todo'
import * as record from './Modules/Record'

const Navigator = () => {
	const [ visible, setVisible ] = useState<boolean>(false);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(category.Init({}));
		dispatch(todo.Init({}));
		dispatch(record.Init({}));
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