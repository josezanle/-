import React from 'react';
import {StyleSheet} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const CameraIcon = () => {
  return (
    <Svg
      style={{
        width: 30,
        height: 30,
        alignSelf: 'flex-end',
      }}
      viewBox="0 0 24 24">
      <Path
        fill="grey"
        d="M20,4H16.83L15,2H9L7.17,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6A2,2 0 0,0 20,4M20,18H4V6H8.05L9.88,4H14.12L15.95,6H20V18M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15Z"
      />
    </Svg>
  );
};

export default CameraIcon;

const styles = StyleSheet.create({});
