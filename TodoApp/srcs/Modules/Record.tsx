import * as storage from '../Storage/Storage'
import { tRecords } from '../Types/DataType'

const RECORD_INIT = 'record/INIT' as const;
const RECORD_ADD = 'record/ADD' as const;
const RECORD_DEL = 'record/DEL' as const;
const RECORD_EDIT = 'record/EDIT' as const;

const initState : tRecords = [{
	catId : 0,
	id : 0,
	date : '20.11.12',
	name : 'Test Record1',
	content : 'TestTestTest'
}];
export const Init = ({ records = initState } : { records? : tRecords }) => ({
	type : RECORD_INIT,
	payload : { records }
})
export const Add = 
({ catId, name, content } :
{ catId : number, name : string, content : string}) => 
({
	type : RECORD_ADD,
	payload : { catId, name, content }
})
export const Del = ({ id } : { id : number }) =>
({
	type : RECORD_DEL,
	payload : { id }
})
export const Edit = ({ id, name, content} :
{ id : number, name : string, content : string}) =>
({
	type : RECORD_EDIT,
	payload : { id, name, content }
})

type Action =
	| ReturnType<typeof Init>
	| ReturnType<typeof Add>
	| ReturnType<typeof Del>
	| ReturnType<typeof Edit>
const Reducer = (state : tRecords = [], action : Action) => {
	let newState;
	
	switch (action.type) {
		case RECORD_INIT :
			return [
				...action.payload.records
			]

		case RECORD_ADD :
			const date = new Date();
			newState = [{
				catId : action.payload.catId,
				id : state.length === 0 ? 0 : state[state.length - 1].id + 1,
				date : `${date.getFullYear() % 100}.${date.getMonth()}.${date.getDate()}`,
				name : action.payload.name,
				content : action.payload.content
			}, ...state]
			storage.setData('records', newState);
			return newState;
		
		case RECORD_DEL :
			return state.filter(rec => rec.id !== action.payload.id)
		
		case RECORD_EDIT :
			newState = state.map(rec => {
				newState = (rec.id === action.payload.id)
					return {...rec, 
						name : action.payload.name,
						content : action.payload.content
					};
				return rec;
			})
			storage.setData('records', newState);
			return newState;
		
		default :
			return state;
	}
}

export default Reducer;
