import React from 'react'
import { PageProp } from '../../Types'
import * as styled from './Style'

const Component = 
({ categories, todos, categoryAdd} : PageProp.MainPage) => 
{
	return (
		<>
			<styled.Text>Main Page</styled.Text>
		</>
	)
}

export default Component;