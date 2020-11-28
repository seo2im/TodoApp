import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as _record from '~/Modules/Record'

import Component from './Component'

const Container = ({ route, navigation }) => {
	const { catId, record } = route.params;
	const dispatch = useDispatch();
	
	const recordAdd = (name : string, content : string) => {
		dispatch(_record.Add({ catId, name, content }));
	}
	const recordEdit = (id : number, name : string, content : string) => {
		dispatch(_record.Edit({ id, name, content }));
	}

	const link = () => navigation.goBack();

	return (
		<Component
			recordAdd={recordAdd}
			recordEdit={recordEdit}
			link={link}
			record={record}/>
	)
}

export default Container