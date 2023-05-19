import React from 'react';
import { Button, Dialog, ScrollView } from 'tamagui';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type ModalProps = {
	/**
	 * Boolean value to control visibility of modal
	 */
	visible: boolean;
	/**
	 * Function to close modal
	 */
	closeModal?: () => void;
	/**
	 * Boolean value to control visibility of close button
	 */
	hideCloseButton?: boolean;
	/**
	 * Content of the modal
	 */
	children?: React.ReactNode;
};

export default function CustomModal({
	visible,
	closeModal,
	hideCloseButton = false,
	children,
}: ModalProps) {
	return (
		<Dialog open={visible} modal>
			<Dialog.Portal>
				<Dialog.Overlay
					onPress={closeModal}
					key="overlay"
					animation="quick"
					backgroundColor={'#000'}
					opacity={0.2}
					enterStyle={{ opacity: 0.2 }}
					exitStyle={{ opacity: 0 }}
				/>

				<Dialog.Content
					width={'90%'}
					maxWidth={450}
					backgroundColor={"#ddd"}
					bordered
					elevate
					key="content"
					animation={[
						'quick',
						{
							opacity: {
								overshootClamping: true,
							},
						},
					]}
					enterStyle={{ x: 0, y: 0, opacity: 1, scale: 1 }}
					exitStyle={{ x: 0, y: 0, opacity: 0, scale: 1 }}
					space={5}>
					{!hideCloseButton && (
						<Dialog.Close asChild>
							<Button
								position="absolute"
								top="$2.5"
								right="$1.5"
								size="$2"
								zIndex={10}
								unstyled
								onPress={closeModal}
								icon={<Icon name="close" size={25} color={"#666"} />}
							/>
						</Dialog.Close>
					)}
					<ScrollView>{children}</ScrollView>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog>
	);
}
