import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Brand } from '@components/index';
import { useTheme } from '@hooks/index';
import { changeTheme, ThemeState } from '@store/theme';
import { useNavigation } from '@react-navigation/native';
import { MainStackParamType } from 'types/navigation';
import i18next from 'i18next';
import { Screen } from '@components/index';

const Example = () => {
	const { t } = useTranslation(['example', 'welcome']);
	const { Common, Fonts, Gutters, Layout, Images, darkMode: isDark } = useTheme();
	const dispatch = useDispatch();
	const navigation = useNavigation<MainStackParamType>();

	const onChangeTheme = ({ theme, darkMode }: Partial<ThemeState>) => {
		dispatch(changeTheme({ theme, darkMode }));
	};

	const onChangeLanguage = (lang: 'es' | 'en') => {
		i18next.changeLanguage(lang);
	};

	return (
		<Screen
			preset="scroll"
			style={Layout.fill}
      contentContainerStyle={[
				Layout.fullSize,
				Layout.fill,
				Layout.colCenter,
				Layout.scrollSpaceBetween,
			]}>
			<View
				style={[
					Layout.fill,
					Layout.relative,
					Layout.fullWidth,
					Layout.justifyContentCenter,
					Layout.alignItemsCenter,
				]}>
				<View
					style={[
						Layout.absolute,
						{
							height: 300,
							width: 300,
							transform: [{ translateY: 0 }],
						},
					]}>
					<Brand height={300} width={300} />
				</View>
				<Image
					style={[
						Layout.absolute,
						Layout.fill,
						{
							top: 0,
							left: 0,
						},
					]}
					source={Images.sparkles.topLeft}
					resizeMode={'contain'}
				/>
				<Image
					style={[
						Layout.absolute,
						{
							bottom: '-10%',
							right: 0,
						},
					]}
					source={Images.sparkles.right}
					resizeMode={'contain'}
				/>
				<Image
					style={[
						Layout.absolute,
						{
							top: '60%',
							right: 0,
						},
					]}
					source={Images.sparkles.bottomRight}
					resizeMode={'contain'}
				/>
			</View>
			<View
				style={[
					Layout.fill,
					Layout.justifyContentBetween,
					Layout.alignItemsStart,
					Layout.fullWidth,
					Gutters.regularHPadding,
				]}>
				<View>
					<Text style={[Fonts.titleRegular]}>{t('welcome:title')}</Text>
					<Text style={[Fonts.textBold, Fonts.textRegular, Gutters.regularBMargin]}>
						{t('welcome:subtitle')}
					</Text>
					<Text style={[Fonts.textSmall, Fonts.textLight]}>{t('welcome:description')}</Text>
				</View>

				<View
					style={[
						Layout.row,
						Layout.justifyContentBetween,
						Layout.fullWidth,
						Gutters.smallTMargin,
					]}>
					<TouchableOpacity
						style={[Common.button.circle, Gutters.regularBMargin]}
						onPress={() => onChangeTheme({ darkMode: !isDark })}>
						<Image
							source={Images.icons.colors}
							style={{ tintColor: isDark ? '#A6A4F0' : '#44427D' }}
						/>
					</TouchableOpacity>

					<TouchableOpacity
						style={[Common.button.circle, Gutters.regularBMargin]}
						onPress={() => onChangeLanguage(i18next.language === 'es' ? 'en' : 'es')}>
						<Image
							source={Images.icons.translate}
							style={{ tintColor: isDark ? '#A6A4F0' : '#44427D' }}
						/>
					</TouchableOpacity>

					<TouchableOpacity
						style={[Common.button.circle, Gutters.regularBMargin]}
						onPress={() => navigation.navigate('ComponentDemo')}>
						<Image
							source={Images.icons.send}
							style={{ tintColor: isDark ? '#A6A4F0' : '#44427D' }}
						/>
					</TouchableOpacity>
				</View>
			</View>
		</Screen>
	);
};

export default Example;
