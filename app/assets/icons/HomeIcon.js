import React from 'react';
import Svg, {Path} from 'react-native-svg';

const HomeIcon = () => {
  return (
    <Svg
      style={{
        width: 35,
        height: 35,
      }}
      viewBox="0 0 24 24">
      <Path
        fill="grey"
        d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22L12 3Z"
      />
    </Svg>
  );
};

export default HomeIcon;
