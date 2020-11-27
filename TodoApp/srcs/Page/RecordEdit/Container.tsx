import React from 'react'
import { State } from '../../Modules'
import { useDispatch, useSelector } from 'react-redux'
import * as record from '../../Modules/Record'

import Component from './Component'

const Container = ({ route, navigation }) => {
	const { catId } = route.params;
	const dispatch = useDispatch();
	
	const recordAdd = (name : string, content : string) => {
		dispatch(record.Add({ catId, name, content }));
	}

	const link = () => navigation.goBack();

	return (
		<Component		
			recordAdd={recordAdd}
			link={link}/>
	)
}

export default Container