import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const PADDING = windowWidth * 0.03;

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
