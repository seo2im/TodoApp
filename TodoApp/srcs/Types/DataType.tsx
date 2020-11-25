export type tCategory = {
	id : number,
	name : string
};
export type tCategories = tCategory[];

export type tTodo = {
	catId : number,
	id : number,
	name : string,
	state : boolean
};
export type tTodos = tTodo[];

export type tRecord = {
	catId : number,
	id : number,
	date : string,
	name : string,
	content : string
}
export type tRecords = tRecord[];