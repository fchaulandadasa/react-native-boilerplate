import React, { FC, ReactElement, useEffect, useRef, useState } from 'react';
import { Label, Stack, Theme, XStack, Text, ListItem, YGroup, Separator, Button } from 'tamagui';
import { Brand, DrawerIcon } from '@components/index';
import DrawerLayout, { DrawerState } from 'react-native-gesture-handler/DrawerLayout';
import { useSharedValue, withTiming } from 'react-native-reanimated';
import { Animated, Dimensions, FlatList, Platform, SectionList, StatusBar } from 'react-native';
import useTheme from '@hooks/useTheme';
import * as NavigationBar from 'expo-navigation-bar';
import * as Demos from './DemoComponents';
import { ChevronRight } from '@tamagui/lucide-icons';

export interface Demo {
	name: string;
	description: string;
	data: ReactElement[];
}

interface DemoListItem {
	item: { name: string; useCases: string[] };
	sectionIndex: number;
	handleScroll: (sectionIndex: number, itemIndex?: number) => void;
}

const ComponentDemo = () => {
	const { darkMode: isDark, NavigationTheme } = useTheme();
	const { colors } = NavigationTheme;

	const cardBackground = colors.card;

	const DrawerListItem: FC<DemoListItem> = ({ item, sectionIndex, handleScroll }) => {
		return (
			<Button
				size={'$5'}
				backgroundColor={cardBackground}
				iconAfter={ChevronRight}
				textAlign='left'
				onPress={() => handleScroll(sectionIndex)}>
				<Text color={colors.text} flex={1}>{item.name}</Text>
			</Button>
		);
	};

	const overlayColor = isDark ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.1)';
	const [open, setOpen] = useState(false);
	const drawerRef = useRef<DrawerLayout>();
	const progress = useSharedValue(0);

	const menuRef = useRef<FlatList>();
	const listRef = useRef<SectionList>();
	const timeout = useRef<ReturnType<typeof setTimeout>>();

	const changeColor = async () => {
		await StatusBar.setBackgroundColor(colors.card);
		await NavigationBar.setBackgroundColorAsync(colors.card);
	};

	useEffect(() => {
		changeColor();
	}, [isDark]);

	const handleScroll = (sectionIndex: number, itemIndex = 0) => {
		listRef.current.scrollToLocation({
			animated: true,
			itemIndex,
			sectionIndex,
		});
		toggleDrawer();
	};

	const toggleDrawer = () => {
		if (!open) {
			setOpen(true);
			drawerRef.current?.openDrawer({ speed: 2 });
		} else {
			setOpen(false);
			drawerRef.current?.closeDrawer({ speed: 2 });
		}
	};

	const scrollToIndexFailed = (info: {
		index: number;
		highestMeasuredFrameIndex: number;
		averageItemLength: number;
	}) => {
		listRef.current?.getScrollResponder()?.scrollToEnd();
		timeout.current = setTimeout(
			() =>
				listRef.current?.scrollToLocation({
					animated: true,
					itemIndex: info.index,
					sectionIndex: 0,
				}),
			50,
		);
	};

	const renderParallaxDrawer = (progressValue: any) => {
		const parallax = progressValue.interpolate({
			inputRange: [0, 1],
			outputRange: [-300, 0],
		});
		const animatedStyles = {
			transform: [{ translateX: parallax }],
		};

		return (
			<Animated.View style={[{ flex: 1 }, animatedStyles]}>
				<Stack top={'$-1.5'} paddingBottom={'$4'} paddingHorizontal={'$5'}>
					<Brand height={65} width={65} />
				</Stack>
				<FlatList<{ name: string; useCases: string[] }>
					ref={menuRef}
					contentContainerStyle={{ paddingHorizontal: 0 }}
					data={Object.values(Demos).map(d => ({
						name: d.name,
						useCases: d.data.map(u => u.props.name),
					}))}
					keyExtractor={item => item.name}
					renderItem={({ item, index: sectionIndex }) => (
						<Stack paddingHorizontal={10}>
							<DrawerListItem {...{ item, sectionIndex, handleScroll }} />
						</Stack>
					)}
				/>
			</Animated.View>
		);
	};

	return (
		<DrawerLayout
			ref={drawerRef}
			drawerWidth={Platform.select({ default: 300, web: Dimensions.get('window').width * 0.3 })}
			drawerType={'slide'}
			drawerPosition={'left'}
			keyboardDismissMode="on-drag"
			overlayColor={open ? overlayColor : 'transparent'}
			onDrawerSlide={drawerProgress => {
				progress.value = open ? 1 - drawerProgress : drawerProgress;
			}}
			onDrawerStateChanged={(newState: DrawerState, drawerWillShow: boolean) => {
				if (newState === 'Settling') {
					progress.value = withTiming(drawerWillShow ? 1 : 0, {
						duration: 250,
					});
					setOpen(drawerWillShow);
				}
			}}
			renderNavigationView={renderParallaxDrawer}>
			<Stack flex={1}>
				<StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} translucent={true} />
				<XStack alignItems="center" space={'$3'} height={'$5'} paddingRight={'$4'}>
					<DrawerIcon onPress={toggleDrawer} {...{ open, progress }} />
					<Label paddingRight={'$6'} size={'$7'}>
						Components
					</Label>
				</XStack>
				<Theme name="blue">
					<SectionList
						ref={listRef}
						contentContainerStyle={{ paddingHorizontal: 24 }}
						stickySectionHeadersEnabled={false}
						sections={Object.values(Demos)}
						renderItem={({ item }) => item}
						renderSectionFooter={() => <Stack paddingBottom={'$4'} />}
						ListFooterComponent={<Stack paddingBottom={'$6'} />}
						onScrollToIndexFailed={scrollToIndexFailed}
						renderSectionHeader={({ section }) => {
							return (
								<Stack paddingTop={'$5'} paddingBottom={'$3'}>
									<Text fontWeight={'700'} fontSize={20} color={colors.text}>
										{section.name}
									</Text>
									<Text>{section.description}</Text>
								</Stack>
							);
						}}
					/>
				</Theme>
			</Stack>
		</DrawerLayout>
	);
};

export default ComponentDemo;
