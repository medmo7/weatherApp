import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import BackgroundFetch from "react-native-background-fetch";

import {notificationHeadlessTask} from './src/manager/bgFetch'

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately

// Register your BackgroundFetch HeadlessTask
BackgroundFetch.registerHeadlessTask(notificationHeadlessTask);

registerRootComponent(App);
