import 'react-native-url-polyfill/auto';  // Ensure this is at the top
import { registerRootComponent } from 'expo';  // Import Expo's registerRootComponent
import App from './App';

registerRootComponent(App);  // Register the main App component automatically handled by Expo
