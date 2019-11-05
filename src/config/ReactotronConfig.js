import Reactotron from 'reactotron-react-native';

import {Platform} from 'react-native';
// onde host é o ip da sua maquina
if (__DEV__) {
  const tron = Reactotron.configure(
    Platform.OS === 'ios' ? null : {host: '192.168.56.1'},
  )
    .useReactNative()
    .connect();
  console.tron = tron;
  tron.clear();
}
