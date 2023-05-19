import { Label, RadioGroup, SizeTokens, ThemeableStack, XStack, YStack } from 'tamagui';
import { Demo } from '../ComponentDemo';

export const RadioGroupDemo: Demo = {
	name: 'Radio Group',
	description: '',
	data: [
		<YStack alignItems="center" space="$2">
			<RadioGroup defaultValue="3" name="form">
				<RadioGroupItemWithLabel size="$3" value="2" label="First value" />
				<RadioGroupItemWithLabel size="$4" value="3" label="Second value" />
				<RadioGroupItemWithLabel size="$5" value="4" label="Third value" />
			</RadioGroup>
		</YStack>,
	],
};

function RadioGroupItemWithLabel(props: { size: SizeTokens; value: string; label: string }) {
	const id = `radiogroup-${props.value}`;
	return (
		<XStack alignItems="center" space="$4">
			<RadioGroup.Item value={props.value} id={id} size={props.size} >
				<RadioGroup.Indicator />
			</RadioGroup.Item>

			<Label size={props.size} htmlFor={id}>
				{props.label}
			</Label>
		</XStack>
	);
}
