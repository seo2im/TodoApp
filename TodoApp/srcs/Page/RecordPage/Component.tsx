import React from 'react'
import { PageProp } from '../../Types'

import * as styled from './Style'

const Component =
({ record, recordDel, recordEdit} : PageProp.RecordPage) => {
	return (
		<styled.View>
			<styled.Title>{record.name}</styled.Title>
			<styled.Date>{record.date}</styled.Date>
			<styled.Content>{record.content}</styled.Content>
		</styled.View>
	)
}

export default Component;