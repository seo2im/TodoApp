import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../Modules';
import * as record from '../../Modules/Record'

import Component from './Component'

const Container = ({ route }) => {
	const { recId } = route.params;
	const dispatch = useDispatch();
	const records = useSelector((state : State) => state.records);
	
	const recordDel = (id : number) => {
		dispatch(record.Del({ id }));
	}
	const recordEdit = (id : number, name : string, brief : string, content : string) => {
		dispatch(record.Edit({ id, name, brief, content}));
	}

	return (
		<Component 
			record={records.find(rec => rec.id === recId)}
			recordDel={recordDel}
			recordEdit={recordEdit}/>
	)
}

export default Container