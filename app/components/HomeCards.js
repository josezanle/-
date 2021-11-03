import React from 'react';
import {StyleSheet, Image, Dimensions, View} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const cardSize = windowWidth * 0.8;

const HomeCards = ({item}) => {
  return (
    <View  style={[styles.cards]}>
      <Image source={{uri: item.img_url}} style={styles.image} />
    </View>
  );
};

export default HomeCards;

const styles = StyleSheet.create({
  cards: {
    width: cardSize,
    height: cardSize,
    marginBottom: 15,
    borderRadius: 15,
    elevation: 7,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
    resizeMode: 'cover',
  },
});
