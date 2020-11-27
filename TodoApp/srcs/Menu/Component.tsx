import React, { useState, useRef, useEffect } from 'react'
import * as styled from './Style'
import { FlatList, Animated } from 'react-native'
import { PageProp } from '../Types'

import Editor from '../Editor/Container'
import { Add } from '../Basic'
import { transform } from '@babel/core'

const Component = ({categories, setVisible} : PageProp.Menu) => {
	const [ edit, setEdit ] = useState<boolean>(false);

	const slideAnim = useRef(new Animated.Value(-300)).current;
	const slideIn = () => {
		Animated.timing(slideAnim, {
			toValue : 0,
			duration : 500,
			useNativeDriver : false,
		}).start();
	}

	const slideOut = () => {
		Animated.timing(slideAnim, {
			toValue : -300,
			duration : 500,
			useNativeDriver : false,
		}).start();
	}

	useEffect(() => {
		slideIn();
	}, []);

	return (
		<>
		<styled.View>
			<styled.Menu as={Animated.View} style={{
				transform : [{translateX : slideAnim}]
			}}>
				<styled.TitleDiv>
					<styled.Title>Category</styled.Title>
					<Add onPress={() => setEdit(true)}/>
				</styled.TitleDiv>
				<FlatList 
					data={categories}
					keyExtractor={(item, index) => `${index}`}
					renderItem={({ item, index }) => (
					<styled.Cat>{item.name}</styled.Cat>
					)}/>
			</styled.Menu>
			<styled.OutSide	activeOpacity={1}
				onPress={() => {
					slideOut();
					setTimeout(() => setVisible(false), 500);
				}}/>
		</styled.View>
		<Editor visible={edit} setVisible={setEdit} />
		</>
	)
}

export default Component;