import { tCategories } from '../Types/DataType'

export const CATEGORY_INIT = 'category/INIT' as const;
export const CATEGORY_ADD = 'category/ADD' as const;
export const CATEGORY_DEL = 'caegory/DEL' as const;
export const CATEGORY_EDIT = 'category/EDIT' as const;

const initState : tCategories = [{
	id : 0, name : "TestCat"
}]

export const Init = ({ categories = initState } : { categories? : tCategories}) => ({
	type : CATEGORY_INIT,
	payload : { categories }
})
export const Add = ({ name } : { name : string }) => ({
	type : CATEGORY_ADD,
	payload : { name }
})
export const Del = ({ id } : { id : number}) => ({
	type : CATEGORY_DEL,
	payload : { id }
})
export const Edit = ({ id, name } : { id : number, name : string }) => ({
	type : CATEGORY_EDIT,
	payload : { id, name }
})

type Action = 
	| ReturnType<typeof Init>
	| ReturnType<typeof Add>
	| ReturnType<typeof Del>
	| ReturnType<typeof Edit>
const Reducer = (state : tCategories = [], action : Action) => {
	switch (action.type) {
		case CATEGORY_INIT :
			return [
				...action.payload.categories
			]

		case CATEGORY_ADD :
			return [...state, {
				id : state.length === 0 ? 0 : state[state.length - 1].id + 1,
				name : action.payload.name
			}]

		case CATEGORY_DEL :
			return state.filter(cat => cat.id !== action.payload.id);

		case CATEGORY_EDIT :
			return state.map(cat => {
				if (cat.id === action.payload.id)
					return { ...cat, name : action.payload.name };
				return cat;
			})
			
		default :
			return state;
	}
}

export default Reducer;