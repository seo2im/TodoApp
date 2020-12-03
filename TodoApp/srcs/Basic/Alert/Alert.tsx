import React from 'react'
import { Alert } from 'react-native'

const Alerting = (onPress) => {
	Alert.alert(
		"경고",
		"정말 삭제하시겠습니까?",
		[{
			text : "Cancel",
			onPress : () => {}
		},{
			text : "Yes",
			onPress : onPress
		}],
		{
			cancelable : false
		}
	)
}

export default Alerting;

