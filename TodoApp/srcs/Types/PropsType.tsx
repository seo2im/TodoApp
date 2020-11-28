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
	categoryDel : (id : number) => void,
	todoDel : (id : number) => void,
	recordDel : (id : number) => void,
	todoChange : (id : number) => void,
	editLink : (catId : number) => void,
	todoLink : (id : number) => void,
	recordLink : (recId : number) => void,
	goBack : () => void
}

export type RecordPage = {
	record : tRecord,
	recordDel : (id : number) => void,
	editLink : (catId : number, record : tRecord) => void,
	goBack : (catId : number) => void
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