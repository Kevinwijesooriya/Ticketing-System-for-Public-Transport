import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createNativeStackNavigator();

const Routes = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{ title: 'Welcome' }}
				/>
				<Stack.Screen name="Profile" component={ProfileScreen} />
				<Stack.Screen name="LoginScreen" component={LoginScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Routes;
