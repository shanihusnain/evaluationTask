import {View, Text} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';

const VideoIcon = () => {
  return (
    <Svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M17.5 11C17.5 12.3807 16.3807 13.5 15 13.5C13.6193 13.5 12.5 12.3807 12.5 11C12.5 9.61929 13.6193 8.5 15 8.5C16.3807 8.5 17.5 9.61929 17.5 11Z"
        stroke="#FEC903"
        stroke-width="1.5"
      />
      <Path
        d="M9.5 11C9.5 12.3807 8.38071 13.5 7 13.5C5.61929 13.5 4.5 12.3807 4.5 11C4.5 9.61929 5.61929 8.5 7 8.5C8.38071 8.5 9.5 9.61929 9.5 11Z"
        stroke="#FEC903"
        stroke-width="1.5"
      />
      <Path
        d="M7 13.5H15"
        stroke="#FEC903"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <Path
        d="M1 11C1 6.28595 1 3.92893 2.46447 2.46447C3.92893 1 6.28595 1 11 1C15.714 1 18.0711 1 19.5355 2.46447C21 3.92893 21 6.28595 21 11C21 15.714 21 18.0711 19.5355 19.5355C18.0711 21 15.714 21 11 21C6.28595 21 3.92893 21 2.46447 19.5355C1 18.0711 1 15.714 1 11Z"
        stroke="#FEC903"
        stroke-width="1.5"
      />
    </Svg>
  );
};

export default VideoIcon;
