import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {PADDING} from '../style/globalStyles';
import MenuIcon from './MenuIcon';

const windowWidth = Dimensions.get('window').width;

const SingleNavBar = ({title}) => {
  return (
    <View style={styles.navbar}>
      <MenuIcon />

      {title && <Text style={styles.headerText}>{title}</Text>}
      <MenuIcon />
    </View>
  );
};

export default SingleNavBar;

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: 'black',
    width: windowWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: PADDING,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
});
