import * as storage from '~/Storage/Storage'
import { tTodos } from '~/Types/DataType'

const TODO_INIT = 'todo/INIT' as const;
const TODO_ADD = 'todo/ADD' as const;
const TODO_DEL = 'todo/DEL' as const;
const TODO_EDIT = 'todo/EDIT' as const;
const TODO_CHANGE = 'todo/DONE' as const;

const initState : tTodos = [{
	catId : 0, id : 0, name : "testTodo1",  date : '20.11.28', state : false
},{
	catId : 0, id : 1, name : "testTodo2",  date : '20.11.28', state : true
}];
export const Init = ({ todos = initState } : { todos? : tTodos }) => ({
	type : TODO_INIT,
	payload : { todos }
})

export const Add = ({ catId, name } : { catId : number, name : string}) => ({
	type : TODO_ADD,
	payload : { catId, name }
});

export const Del = ({ id } : { id : number }) => ({
	type : TODO_DEL,
	payload : { id }
});

export const Edit = ({ id, name } : { id : number, name : string }) => ({
	type : TODO_EDIT,
	payload : { id, name }
});

export const Change = ({ id } : { id : number}) => ({
	type : TODO_CHANGE,
	payload : { id }
});

type Action = 
	| ReturnType<typeof Init>
	| ReturnType<typeof Add>
	| ReturnType<typeof Del>
	| ReturnType<typeof Edit>
	| ReturnType<typeof Change>;
const Reducer = (state : tTodos = [], action : Action) => {
	let newState;

	switch (action.type) {
		case TODO_INIT :
			return [
				...action.payload.todos
			]

		case TODO_ADD :
			const date = new Date();
			newState = [{
				catId : action.payload.catId,
				id : state.length === 0 ? 0 : state[0].id + 1,
				name : action.payload.name,
				date : `${date.getFullYear()%100}.${date.getMonth()}.${date.getDate()}`,
				state : false}, ...state];
			storage.setData('todos', newState);
			return newState;

		case TODO_DEL :
			newState = state.filter(todo => todo.id !== action.payload.id);
			storage.setData('todos', newState);
			return newState;

		case TODO_EDIT :
			newState = state.map(todo => {
				if (todo.id === action.payload.id)
					return {...todo, name : action.payload.name};
				return todo;
			})
			storage.setData('todos', newState);
			return newState;
		
		case TODO_CHANGE :
			newState = state.map(todo => {
				if (todo.id === action.payload.id)
					return {...todo, state : !todo.state}
				return todo;
			})
			storage.setData('todos', newState);
			return newState;
			
		default :
			return state;
	}
}

export default Reducer;