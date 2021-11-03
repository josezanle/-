import React from 'react';
import {FlatList, View} from 'react-native';
import {DATA} from '../../api/data';
import HomeCards from '../../components/HomeCards';
import {globalStyles} from '../../style/globalStyles';

const HomeScreen = () => {
  return (
    <View style={[globalStyles.container]}>
      <FlatList
        contentContainerStyle={{
          alignItems: 'center',
        }}
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          return <HomeCards item={item} />;
        }}
      />
    </View>
  );
};

export default HomeScreen;
