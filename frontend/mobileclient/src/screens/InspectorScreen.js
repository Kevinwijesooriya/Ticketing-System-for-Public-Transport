import React from 'react';
import { Button } from 'react-native';
const InspectorScreen = ({ navigation }) => {
	return (
		<>
			<Button
				title="Scan QR Code"
				onPress={() => navigation.navigate('QRScreen')}
			/>
		</>
	);
};
export default InspectorScreen;
