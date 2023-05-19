import React, { useEffect } from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';
import { useTheme } from '@hooks/index';
import { Brand } from '@components/index';
import { setDefaultTheme } from '@store/theme';
import { ApplicationScreenProps } from 'types/navigation';
import * as NavigationBar from 'expo-navigation-bar';

const Startup = ({ navigation }: ApplicationScreenProps) => {
	const { Layout, Gutters, darkMode: isDark, NavigationTheme } = useTheme();
	const { colors } = NavigationTheme;
	const init = async () => {
		await NavigationBar.setVisibilityAsync('hidden');
		
		await new Promise(resolve =>
			setTimeout(() => {
				resolve(true);
			}, 2000),
		);
		await NavigationBar.setBackgroundColorAsync(colors.card);
		await setDefaultTheme({ theme: 'default', darkMode: null });
		navigation.reset({
			index: 0,
			routes: [{ name: 'Main' }],
		});
		await NavigationBar.setVisibilityAsync('visible');
	};

	useEffect(() => {
		init();
	}, []);

	return (
		<View style={[Layout.fill, Layout.colCenter, { paddingTop: 73 }]}>
			<StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
			<Brand height={150} width={150} />
			<ActivityIndicator size={'large'} style={[Gutters.largeVMargin]} />
		</View>
	);
};

export default Startup;
