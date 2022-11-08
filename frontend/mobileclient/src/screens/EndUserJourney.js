import React, { useState } from 'react';
import {
	Keyboard,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import { apiSauce } from '../interceptors/APIClient';
const EndUserJourneyScreen = ({ navigation, route }) => {
	const data = route.params.data.data;
	console.log('EndUserJourneyScreen ~ data', data);
	const [endDestination, setEndDestination] = useState('');
	const [amount, setAmount] = useState('');
	const saveJourney = async () => {
		try {
			const response = apiSauce.put(`/api/journey/update/${data._id}`, {
				status: 'completed',
				endDestination,
				amount,
			});
			console.log('~ response', response.status);
			navigation.navigate('InspectorScreen');
		} catch (error) {
			console.log('~ error', error);
		}
	};
	const calculateFee = () => {
		let number = Math.floor(Math.random() * 20) + 1;
		let fee = number * 37;
		setAmount(fee.toString());
	};
	return (
		<>
			<View style={styles.centerStyle}>
				<Text style={styles.titleTextStyle}>END USER JOURNEY</Text>
			</View>
			<View style={styles.centerStyle}>
				<Text style={styles.labelGreenTextStyle}>Start Location</Text>
				<Text style={styles.labelGreenTextStyle}>
					{data.startDestination}
				</Text>
			</View>
			<Text style={styles.labelTextStyle}>End Location</Text>
			<View style={styles.SectionStyle}>
				<TextInput
					style={styles.inputStyle}
					onChangeText={EndDestination =>
						setEndDestination(EndDestination)
					}
					underlineColorAndroid="#f000"
					placeholder="Enter Ending Location"
					placeholderTextColor="#8b9cb5"
					returnKeyType="next"
					onSubmitEditing={Keyboard.dismiss}
					blurOnSubmit={false}
				/>
			</View>
			<View style={styles.centerStyle}>
				<Text style={styles.priceTextStyle}>Rs {amount} /= </Text>
			</View>
			<TouchableOpacity
				style={styles.buttonStyle}
				activeOpacity={0.5}
				onPress={calculateFee}>
				<Text style={styles.buttonTextStyle}>Calculate Price</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.buttonStyle}
				activeOpacity={0.5}
				onPress={saveJourney}>
				<Text style={styles.buttonTextStyle}>End Journey</Text>
			</TouchableOpacity>
		</>
	);
};
export default EndUserJourneyScreen;
const styles = StyleSheet.create({
	centerStyle: { alignItems: 'center' },
	imageStyle: {
		width: '50%',
		height: 100,
		resizeMode: 'contain',
		margin: 30,
	},
	titleTextStyle: {
		color: '#004a9c',
		paddingVertical: 10,
		fontSize: 30,
		fontWeight: 'bold',
	},
	inputStyle: {
		flex: 1,
		color: '#336eb0',
		paddingLeft: 15,
		paddingRight: 15,
		borderWidth: 1,
		borderRadius: 30,
		borderColor: '#336eb0',
	},
	buttonStyle: {
		backgroundColor: '#004a9c',
		borderWidth: 0,
		height: 60,
		alignItems: 'center',
		borderRadius: 30,
		marginLeft: 35,
		marginRight: 35,
		marginTop: 20,
		marginBottom: 25,
	},
	buttonTextStyle: {
		color: 'white',
		paddingVertical: 14,
		fontSize: 24,
	},
	SectionStyle: {
		flexDirection: 'row',
		height: 40,
		marginTop: 20,
		marginLeft: 35,
		marginRight: 35,
		margin: 10,
	},
	labelTextStyle: {
		color: '#00264f',
		marginLeft: 35,
		fontSize: 14,
	},
	priceTextStyle: {
		color: '#00264f',
		fontSize: 20,
	},
	labelGreenTextStyle: {
		color: '#13a704',
		marginBottom: 20,
		fontSize: 14,
	},
});
