import React from 'react';
import { Check as CheckIcon } from '@tamagui/lucide-icons';
import { Checkbox, Label, SizeTokens, ThemeName, XStack } from 'tamagui';

const CheckboxWithLabel = (props: { size: SizeTokens; defaultChecked?: boolean; label: string; theme?: ThemeName }) => {
	return (
		<XStack alignItems="center" space="$4">
			<Checkbox size={props.size} defaultChecked={props.defaultChecked} theme={props.theme}>
				<Checkbox.Indicator>
					<CheckIcon />
				</Checkbox.Indicator>
			</Checkbox>

			<Label size={props.size}>
				{props.label}
			</Label>
		</XStack>
	);
}

export default CheckboxWithLabel;