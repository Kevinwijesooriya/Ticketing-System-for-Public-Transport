import React from 'react';
import { Button } from 'react-native';
import {
	AppRegistry,
	StyleSheet,
	Text,
	TouchableOpacity,
	Linking,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
const QRScreen = ({ navigation }) => {
	const onSuccess = e => {
		console.log('🚀 ~ file: QRScreen.js ~ line 15 ~ onSuccess ~ e', e);
		Linking.openURL(e.data).catch(err =>
			console.error('An error occured', err),
		);
	};
	return (
		<>
			<QRCodeScanner
				onRead={e => onSuccess(e)}
				// flashMode={RNCamera.Constants.FlashMode.torch}
				topContent={
					<Text style={styles.centerText}>Scan the QR code.</Text>
				}
				bottomContent={
					<TouchableOpacity style={styles.buttonTouchable}>
						<Text style={styles.buttonText}>QR</Text>
					</TouchableOpacity>
				}
			/>
			<Button
				title="Back To Home"
				onPress={() => navigation.navigate('Home')}
			/>
		</>
	);
};
const styles = StyleSheet.create({
	centerText: {
		flex: 1,
		fontSize: 18,
		padding: 32,
		color: '#777',
	},
	textBold: {
		fontWeight: '500',
		color: '#000',
	},
	buttonText: {
		fontSize: 21,
		color: '#004a9c',
	},
	buttonTouchable: {
		padding: 16,
	},
});
export default QRScreen;
