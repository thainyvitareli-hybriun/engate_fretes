/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src';
import {name as appName} from './app.json';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

require('dayjs/locale/pt-br');

dayjs.locale('pt-br');
dayjs.extend(customParseFormat);

AppRegistry.registerComponent(appName, () => App);
