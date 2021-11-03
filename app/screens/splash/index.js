import {useNavigation} from '@react-navigation/core';
import React, {useEffect} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {globalStyles} from '../../style/globalStyles';
const windowWidth = Dimensions.get('window').width;
const heightWidth = Dimensions.get('window').height;

const imageBg =
  'https://images.pexels.com/photos/449559/pexels-photo-449559.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260';

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('DrawerStack', {
        screen: 'HomeScreen',
      });
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={[globalStyles.container, styles.bg]}>
      <Text style={styles.text}>Bienvenido/a!</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  bg: {
    backgroundColor: 'rgba(0,0,0,1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 62,
    zIndex: 10,
  },
  image: {
    width: windowWidth,
    height: heightWidth,
    // opacity: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
