import {View, Text} from 'react-native';
import React from 'react';
import {Path, Rect, Svg} from 'react-native-svg';

const checkBox = props => {
  const {color} = props;
  return (
    <Svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Rect x="1" y="1.5" width="14" height="14" rx="3" fill="#FEC903" />
      <Rect
        x="1"
        y="1.5"
        width="14"
        height="14"
        rx="3"
        stroke="#FEC903"
        stroke-width="2"
      />
      <Path
        d="M3.33333 9.16667L6 11.8333L12.6667 5.16667"
        stroke={color || 'white'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default checkBox;
