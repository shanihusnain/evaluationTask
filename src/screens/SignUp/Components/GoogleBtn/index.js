import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {Facebook, Google} from '../../../../assets/icons';
import Typography from '../../../../components/typography';
import colors from '../../../../assets/colors';
import fonts from '../../../../assets/fonts';

const GoogleBtn = () => {
  return (
    <Pressable
      style={{
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.white,
        borderRadius: 25,
        width: '90%',
        alignSelf: 'center',
        marginVertical: 20,
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingRight: 110,
      }}>
      <Google />
      <Typography
        text="Sign up with google"
        color={colors.black}
        fontSize={14}
        fontWeight="400"
        fontFamily={fonts.InterBold}
      />
    </Pressable>
  );
};

export default GoogleBtn;
