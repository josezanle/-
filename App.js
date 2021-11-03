import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {HomeStack} from './app/stacks/HomeStack';
import {LogBox} from 'react-native';

export default function App() {
  React.useEffect(() => {
    LogBox.ignoreLogs(['']);
  }, []);

  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}
