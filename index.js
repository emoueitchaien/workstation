/**
 * @format
 */

import { AppRegistry } from 'react-native'
import { name as appName } from './app.json'
import MainPage from './source'
import { server } from '@/api/mocks/server'
server

AppRegistry.registerComponent(appName, () => MainPage)
