import React, { useState } from 'react'
import * as styled from './Style'
import { Button } from '../../Basic'
import { tRecord } from '../../Types/DataType'

type Props = {
	recordAdd : (name : string, content : string) => void,
	recordEdit : (id : number, name : string, content : string) => void,
	link : () => void,
	record? : tRecord
}

const Component = ({recordAdd, recordEdit, link, record} : Props) => {
	const [ title, setTitle ] = useState<string>(record ? record.name : "");
	const [ content, setContent ] = useState<string>(record ? record.content : "");

	return (
		<styled.View>
			<styled.Title
				placeholder="제목"
				value={title}
				onChangeText={value => setTitle(value)}
				/>
			<styled.Content 
				placeholder="내용"
				value={content}
				maxLength={40}
				onChangeText={value => setContent(value)}
				/>
			<styled.ButtonWrap>
				<Button title={record ? "Edit" : "Add"} onPress={() => {
				if (title === "")
					return ;
				record ? recordEdit(record.id, title, content) :
				recordAdd(title, content);link()}}/>
			</styled.ButtonWrap>
		</styled.View>
	)
}

export default Component;