import { Activity, Airplay } from '@tamagui/lucide-icons';
import { Button, XGroup, XStack, YStack } from 'tamagui';
import { Demo } from '../ComponentDemo';

export const ButtonDemo: Demo = {
	name: 'Buttons',
	description: '',
	data: [
		<YStack space>
			<Button elevation={'$0'}>Plain</Button>
			<Button elevation={'$0'} alignSelf="center" icon={Airplay} size="$6">
				Large
			</Button>
			<XStack space="$2" justifyContent="center">
				<Button size="$3" theme="alt2">
					Alt2
				</Button>
				<Button size="$3" theme="green">
					Green
				</Button>
			</XStack>
			<XStack space="$2" justifyContent="center">
				<Button themeInverse size="$3">
					Small Inverse
				</Button>
				<Button iconAfter={Activity} size="$3">
					After
				</Button>
			</XStack>
			<XGroup>
				<XGroup.Item>
					<Button width="50%" size="$2" disabled opacity={0.5}>
						Disabled
					</Button>
				</XGroup.Item>

				<XGroup.Item>
					<Button width="50%" size="$2" chromeless>
						Chromeless
					</Button>
				</XGroup.Item>
			</XGroup>
		</YStack>
	],
};

export default ButtonDemo;
