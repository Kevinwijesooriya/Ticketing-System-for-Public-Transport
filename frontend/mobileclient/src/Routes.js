import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegistrationScreen';
import InspectorScreen from './screens/InspectorScreen';
import QRScreen from './screens/QRScreen';

const Stack = createNativeStackNavigator();

const Routes = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="LoginScreen"
					component={LoginScreen}
					options={{ title: 'Welcome' }}
				/>
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{ title: 'Home' }}
				/>
				<Stack.Screen name="Profile" component={ProfileScreen} />
				<Stack.Screen
					name="RegisterScreen"
					component={RegisterScreen}
				/>
				<Stack.Screen
					name="InspectorScreen"
					component={InspectorScreen}
				/>
				<Stack.Screen name="QRScreen" component={QRScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Routes;
