import { tCategory, tCategories, tTodos, tRecord, tRecords } from './DataType'

export type MainPage = {
	categories : tCategories,
	todos : tTodos,
	categoryAdd : (name : string) => void
}

export type CategoryPage = {
	category : tCategory
	todos : tTodos,
	records : tRecords
	categoryEdit : (id : number, name : string) => void,
	categoryDel : (id : number) => void,
	todoAdd : (catId : number, name :string) => void,
	todoEdit : (id : number, name : string) => void,
	todoDone : (id : number) => void,
	todoDel : (id : number) => void,
	recordAdd : (catId : number, name : string, brief : string, content : string) => void,
}

export type RecordPage = {
	catName : string,
	record : tRecord,
	recordEdit : (id : number, name : string, brief : string, content : string) => void,
	recordDel : (id : number) => void,
}