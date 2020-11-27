import React, { useState } from 'react'
import * as styled from './Style'
import { Add } from '../../Basic'


const Component = ({recordAdd, link}) => {
	const [ title, setTitle ] = useState<string>("");
	const [ content, setContent ] = useState<string>("");

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
			<styled.BottomAdd>
				<Add onPress={() => {
				if (title === "")
					return ;
				recordAdd(title, content);link()}}/>
			</styled.BottomAdd>
		</styled.View>
	)
}

export default Component;