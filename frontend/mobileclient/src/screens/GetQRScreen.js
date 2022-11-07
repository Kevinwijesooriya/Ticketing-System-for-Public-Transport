import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const GetQRScreen = ({ navigation }) => {
	const [userData, setUserData] = useState({});
	const getAuth = async () => {
		try {
			const jsonValue = await AsyncStorage.getItem('auth');
			setUserData(JSON.parse(jsonValue));
			console.log('getAuth ~ jsonValue', JSON.parse(jsonValue));
		} catch (e) {
			console.log('getAuth ~ e', e);
		}
	};
	useEffect(() => {
		getAuth();
	}, []);

	console.log(
		'🚀 ~ file: GetQRScreen.js ~ line 16 ~ GetQRScreen ~ userData',
		userData,
	);
	return (
		<>
			<Text style={styles.labelTextStyle}>_id - {userData._id}</Text>
			<Text style={styles.labelTextStyle}>email - {userData.email}</Text>
			<Text style={styles.labelTextStyle}>role - {userData.role}</Text>
			<Text style={styles.labelTextStyle}>
				userName - {userData.userName}
			</Text>
			<QRCode value={userData._id} />
		</>
	);
};
export default GetQRScreen;
const styles = StyleSheet.create({
	labelTextStyle: {
		color: '#00264f',
		fontSize: 14,
	},
});
