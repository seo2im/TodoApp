import React, { useState, useRef, useEffect } from 'react'
import * as styled from './Style'
import { FlatList, Animated } from 'react-native'
import { PageProp } from '../Types'

import Editor from '../Editor/Container'
import { Add } from '../Basic'

const Component = ({categories, setVisible, link } : PageProp.Menu) => {
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
		setTimeout(() => setVisible(false), 500);
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
					<styled.Cat onPress={() => {
						link(item.id, item.name);slideOut();
					}}>{item.name}</styled.Cat>
					)}/>
			</styled.Menu>
			<styled.OutSide	activeOpacity={1}
				onPress={() => {
					slideOut();
				}}/>
		</styled.View>
		<Editor visible={edit} setVisible={setEdit} />
		</>
	)
}

export default Component;