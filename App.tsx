/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import fonts from './src/assets/fonts';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MyTabs from './src/navigation/BottomTabStack';
import PrivateStack from './src/navigation/PrivateStack';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <PrivateStack />
    </NavigationContainer>
  );
}

export default App;
