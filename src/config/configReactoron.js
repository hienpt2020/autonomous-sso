import { reactotronRedux } from 'reactotron-redux';
import Reactotron from 'reactotron-react-native';
import { NativeModules } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

let config = {};

if (__DEV__) {
    let scriptHostname;
    const scriptURL = NativeModules.SourceCode.scriptURL;
    scriptHostname = scriptURL.split('://')[1].split(':')[0];
    config = { host: scriptHostname };
}

const reactotron = Reactotron.configure({ name: 'React Native Autonomous App', ...config })
    .useReactNative()
    .setAsyncStorageHandler(AsyncStorage)
    .use(reactotronRedux())
    .connect();

export default reactotron;
