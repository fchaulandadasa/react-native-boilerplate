import React, { useEffect } from 'react';
import { ComponentDemo, Example } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
import * as NavigationBar from 'expo-navigation-bar';
import useTheme from '@hooks/useTheme';

const Stack = createStackNavigator();

// Animation to navigate to next screen - add options={{ cardStyleInterpolator: forFade }} to Stack.Screen
const forFade = ({ current }) => ({
	cardStyle: {
		opacity: current.progress,
	},
});

// @refresh reset
const MainNavigator = () => {
	const { Layout, darkMode: isDark, NavigationTheme } = useTheme();
	const { colors } = NavigationTheme;
	
	const changeColor = async () => {
		//await StatusBar.setBackgroundColor(colors.card);
		await NavigationBar.setVisibilityAsync('visible')
		await NavigationBar.setBackgroundColorAsync(colors.card);
	};

	useEffect(() => {
		changeColor();
	}, [isDark]);

	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Home" component={Example} />
			<Stack.Screen
				name="ComponentDemo"
				component={ComponentDemo}
				options={{ cardStyleInterpolator: forFade }}
			/>
		</Stack.Navigator>
	);
};

export default MainNavigator;
