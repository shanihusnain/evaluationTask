import {View, Text, Pressable} from 'react-native';
import React from 'react';
import Typography from '../typography';
import colors from '../../assets/colors';

const PrimaryButton = ({title, onPress}) => {
  return (
    <Pressable
      style={{
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.yellow,
        borderRadius: 25,
        width: '90%',
        alignSelf: 'center',
        marginVertical: 20,
      }}
      onPress={onPress}>
      <Typography
        text={title}
        color={colors.black}
        fontSize={14}
        fontWeight="400"
      />
    </Pressable>
  );
};

export default PrimaryButton;
