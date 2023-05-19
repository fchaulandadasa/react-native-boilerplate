import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from './store';
import ApplicationNavigator from './navigators/Application';
import './translations';
import { TamaguiProvider } from 'tamagui';
import config from '../tamagui.config';

const App = () => {
	return (
		<Provider store={store}>
			{/**
			 * PersistGate delays the rendering of the app's UI until the persisted state has been retrieved
			 * and saved to redux.
			 * The `loading` prop can be `null` or any react instance to show during loading (e.g. a splash screen),
			 * for example `loading={<SplashScreen />}`.
			 * @see https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md
			 */}
			<PersistGate loading={null} persistor={persistor}>
				<TamaguiProvider config={config}>
					<ApplicationNavigator />
				</TamaguiProvider>
			</PersistGate>
		</Provider>
	);
};

export default App;
