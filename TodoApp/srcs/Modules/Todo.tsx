import { tTodos } from '../Types/DataType'

const TODO_INIT = 'todo/INIT' as const;
const TODO_ADD = 'todo/ADD' as const;
const TODO_DEL = 'todo/DEL' as const;
const TODO_EDIT = 'todo/EDIT' as const;
const TODO_DONE = 'todo/DONE' as const;

const initState : tTodos = [{
	catId : 0, id : 0, name : "testTodo1",  state : false
},{
	catId : 0, id : 1, name : "testTodo2",  state : true
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

export const Done = ({ id } : { id : number}) => ({
	type : TODO_DONE,
	payload : { id }
});

type Action = 
	| ReturnType<typeof Init>
	| ReturnType<typeof Add>
	| ReturnType<typeof Del>
	| ReturnType<typeof Edit>
	| ReturnType<typeof Done>;
const Reducer = (state : tTodos = [], action : Action) => {
	switch (action.type) {
		case TODO_INIT :
			return [
				...action.payload.todos
			]

		case TODO_ADD :
			return [{
				catId : action.payload.catId,
				id : state.length === 0 ? 0 : state[state.length - 1].id + 1,
				name : action.payload.name,
				state : false}, ...state];

		case TODO_DEL :
			return state.filter(todo => todo.id !== action.payload.id);
		
		case TODO_EDIT :
			return state.map(todo => {
				if (todo.id === action.payload.id)
					return {...todo, name : action.payload.name};
				return todo;
			})
		
		case TODO_DONE :
			return state.map(todo => {
				if (todo.id === action.payload.id)
					return {...todo, state : true}
				return todo;
			})
			
		default :
			return state;
	}
}

export default Reducer;