import { Button, Input, SizeTokens, TextArea, XStack, YStack } from 'tamagui';
import { Demo } from '../ComponentDemo';

export const InputDemo: Demo = {
	name: 'Input and TextArea',
	description: '',
	data: [
		<YStack
			overflow="hidden"
			space="$2"
			margin="$3">
			<XStack alignItems="center" space="$2">
				<Input flex={1} size={'$3'} placeholder={`Size $3 ...`} />
				<Button size={'$3'}>Go</Button>
			</XStack>
            <XStack alignItems="center" space="$2">
				<Input flex={1} size={'$4'} placeholder={`Size $4 ...`} />
				<Button size={'$4'}>Go</Button>
			</XStack>
            <XStack alignItems="center" space="$2">
				<Input flex={1} size={'$5'} placeholder={`Size $5 ...`} theme={'green'}/>
				<Button size={'$5'} theme={'green'}>Go</Button>
			</XStack>
			<TextArea minHeight={140} placeholder="Enter your message ..." numberOfLines={4} />
		</YStack>,
	],
};
