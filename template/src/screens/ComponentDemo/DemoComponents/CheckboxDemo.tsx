import { Checkbox } from '@components/index';
import { YStack } from 'tamagui';
import { Demo } from '../ComponentDemo';

export const CheckboxDemo: Demo = {
	name: 'Checkbox',
	description: '',
	data: [
		<YStack alignItems="center" justifyContent="center">
			<Checkbox size="$4" defaultChecked label="Accept terms and conditions" />
			<Checkbox size="$6" label="Accept terms and conditions" theme={'green'} />
		</YStack>,
	],
};

export default CheckboxDemo;
