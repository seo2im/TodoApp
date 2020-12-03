import React from 'react'
import { PageProp } from '~/Types'

import { Button, Alert } from '~/Basic'
import * as styled from './Style'

const Component =
({ record, recordDel, editLink, goBack} : PageProp.RecordPage) => {
	return (
		<>
		{record ?
		<styled.View>
			<styled.Title>
				<styled.TitleText>{record.name}</styled.TitleText>
				<styled.buttonDiv>
					<Button title="Edit" onPress={() => editLink(record.catId, record)}/>
					<Button title="Del" onPress={() => Alert(() => {
						recordDel(record.id);
						goBack(record.catId);
					})}/>
				</styled.buttonDiv>
			</styled.Title>
			<styled.Date>{record.date}</styled.Date>
			<styled.Content>{record.content}</styled.Content>
		</styled.View> : null}
		</>
	)
}

export default Component;