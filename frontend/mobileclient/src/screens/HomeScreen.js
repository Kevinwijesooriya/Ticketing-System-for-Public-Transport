import React from 'react';
import { Button } from 'react-native';
const HomeScreen = ({ navigation }) => {
	return (
		<>
			<Button
				title="Go to Jane's profile"
				onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
			/>
			<Button
				title="Login"
				onPress={() => navigation.navigate('LoginScreen')}
			/>
		</>
	);
};
export default HomeScreen;
