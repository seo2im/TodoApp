import { tCategory, tCategories, tTodos, tRecord, tRecords } from './DataType'
import { Ref } from 'react'

export type MainPage = {
	categories : tCategories,
	todos : tTodos,
	todoChange : (id : number) => void,
	link : (catId : number, catName : string) => void
}

export type CategoryPage = {
	category : tCategory
	todos : tTodos,
	records : tRecords
	categoryEdit : (id : number, name : string) => void,
	categoryDel : (id : number) => void,
	todoAdd : (catId : number, name :string) => void,
	todoEdit : (id : number, name : string) => void,
	todoChange : (id : number) => void,
	todoDel : (id : number) => void,
	recordAdd : (catId : number, name : string, brief : string, content : string) => void,
}

export type RecordPage = {
	catName : string,
	record : tRecord,
	recordEdit : (id : number, name : string, brief : string, content : string) => void,
	recordDel : (id : number) => void,
}

export type CheckBox = {
	state : boolean,
	todoChange : () => void
}

export type Menu = {
	setVisible : (visible : boolean) => void,
	categories : tCategories,
	link : (catId : number, catName : string) => void;
}