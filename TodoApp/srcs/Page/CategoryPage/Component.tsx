import React from 'react'
import { PageProp } from '../../Types'
import * as styled from './Style'

const Component = 
({ category, todos, records, 
categoryEdit, categoryDel,
todoAdd, todoDel, todoChange, todoEdit,
recordAdd } : PageProp.CategoryPage) => 
{
	return (
		<>
			<styled.Text>Category Page</styled.Text>
		</>
	)
}

export default Component;