import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../Modules';
import * as record from '../../Modules/Record'

import Component from './Component'
import { tRecord } from '../../Types/DataType';

const Container = ({ route, navigation }) => {
	const { recId } = route.params;
	const dispatch = useDispatch();
	const records = useSelector((state : State) => state.records);
	
	const recordDel = (id : number) => {
		dispatch(record.Del({ id }));
	}	

	const editLink = (catId : number, record : tRecord = undefined) => {
		navigation.navigate('RecordEditor', { catId, record })
	}
	const goBack = (catId : number) => {
		navigation.navigate('CategoryPage', { catId });
	}

	return (
		<Component 
			record={records.find(rec => rec.id === recId)}
			recordDel={recordDel}
			editLink={editLink}
			goBack={goBack}/>
	)
}

export default Container