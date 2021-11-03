import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/splash';
import HomeScreen from '../screens/home';
import SingleNavBar from '../components/SingleNavBar';
import DrawerStack from './DrawerStack';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={({route}) => ({
        header: props => {
          let title;

          if (route.name === 'HomeScreen') {
            title = 'Este es Home';
            return <SingleNavBar {...props} title={title} />;
          }
        },
      })}>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: true}}
      /> */}
      <Stack.Screen
        name="DrawerStack"
        component={DrawerStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
