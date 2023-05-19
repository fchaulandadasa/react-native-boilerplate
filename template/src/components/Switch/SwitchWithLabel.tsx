import { useState } from 'react';
import {
	Label,
	Separator,
	SizeTokens,
	SpaceTokens,
	Switch,
	Theme,
	ThemeName,
	XStack,
} from 'tamagui';

const SwitchWithLabel = (props: {
	size: SizeTokens;
	label: string;
	labelSize: SizeTokens;
	theme: ThemeName;
	space: SpaceTokens;
	checked: boolean;
	onChange?: () => void;
}) => {
	return (
		<Theme name={props.theme}>
			<XStack alignItems="center" space={props.space}>
				<Label paddingRight="$0" justifyContent="flex-end" size={props.labelSize}>
					{props.label}
				</Label>
				<Separator minHeight={20} vertical />
				<Switch
					size={props.size}
					checked={props.checked}
					onCheckedChange={() => {
						{
							props.onChange && props.onChange();
						}
					}}>
					<Switch.Thumb animation="bouncy" />
				</Switch>
			</XStack>
		</Theme>
	);
};

export default SwitchWithLabel;
