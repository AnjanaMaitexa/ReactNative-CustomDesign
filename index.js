/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import cards from './cards';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => cards);
