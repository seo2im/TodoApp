import React, { useState } from 'react'
import * as styled from './Style'
import { Close, Button } from '~/Basic'
import { tCategory } from '~/Types/DataType'

type Props = {
	setVisible : (visible : boolean) => void;
	categoryAdd : (name : string) => void,
	categoryEdit : (id : number, name : string) => void,
	category? : tCategory,
}

const Component = ({ setVisible, categoryAdd, categoryEdit, category } : Props) => {
	const [ name, setName ] = useState<string>(category ? category.name : "");

	return (
		<styled.View>
			<styled.Box>
				<styled.CloseWrap>
				<Close onPress={() => setVisible(false)}/>
				</styled.CloseWrap>
				<styled.Title>{`카테고리 ${category ? "수정" : "추가"}`}</styled.Title>
				<styled.Input 
					placeholder="카테고리 이름"
					value={name}
					onChangeText={value => setName(value)}/>
				<styled.ButtonWrap>
				<Button title="OK" onPress={() => {
						if (name === "")
							return;
						category ? categoryEdit(category.id, name) : categoryAdd(name);
						setName("");setVisible(false);
					}}/>
				</styled.ButtonWrap>
			</styled.Box>
		</styled.View>
	)
}

export default Component;