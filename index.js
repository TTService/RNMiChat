/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import BootView from "./view/BootView";
import TextTestCode from "./view/TextTestCode";

//AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => BootView);
