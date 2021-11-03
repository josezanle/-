import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import DrawerContentMenu from '../components/DrawerContentMenu';
import New from '../screens/new/New';
import HomeScreen from '../screens/home';
import UbicationScreen from '../screens/ubication/UbicationScreen';
import {PADDING} from '../style/globalStyles';

const Drawer = createDrawerNavigator();

export default DrawerStack = () => {
  return (
    <Drawer.Navigator
      initialRouteName="HomeScreen"
      drawerContent={props => <DrawerContentMenu {...props} />}
      screenOptions={{
        drawerStyle: {
          width: 280,
          backgroundColor: 'rgba(255, 255, 255, .8)',
          paddingHorizontal: PADDING,
        },
      }}>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="New" component={New} />
      <Drawer.Screen name="UbicationScreen" component={UbicationScreen} />
    </Drawer.Navigator>
  );
};
