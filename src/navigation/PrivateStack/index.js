import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Signup from '../../screens/SignUp';
import MyTabs from '../BottomTabStack';

const PrivateStack = () => {
  const navigation = useNavigation();

  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignUp">
        {props => <Signup {...props} navigation={navigation} />}
      </Stack.Screen>
      <Stack.Screen name="MyTabs" component={MyTabs} />
    </Stack.Navigator>
  );
};

export default PrivateStack;
