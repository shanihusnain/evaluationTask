import {View, Text} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';

const Home = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M9.51409 2.89691L4.37096 6.90454C3.51218 7.57248 2.81561 8.99424 2.81561 10.0725V17.1431C2.81561 19.3568 4.61905 21.1698 6.83279 21.1698H17.8824C20.0961 21.1698 21.8996 19.3568 21.8996 17.1526V10.2061C21.8996 9.05149 21.1267 7.57248 20.182 6.91408L14.2851 2.7824C12.9492 1.84729 10.8023 1.895 9.51409 2.89691Z"
        stroke="#676D75"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12.3574 16.8626V14"
        stroke="#676D75"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default Home;
