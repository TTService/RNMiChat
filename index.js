/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import LoginComponent from "./view/LoginComponent";
import HomeView from "./view/HomeView";
import TextTestCode from "./view/TextTestCode";

//AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => LoginComponent);
//AppRegistry.registerComponent(appName, () => HomeView);
