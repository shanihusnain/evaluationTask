import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {Facebook} from '../../../../assets/icons';
import Typography from '../../../../components/typography';
import colors from '../../../../assets/colors';
import fonts from '../../../../assets/fonts';

const FacebookBtn = () => {
  return (
    <Pressable
      style={{
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.facebookBtnBg,
        borderRadius: 25,
        width: '90%',
        alignSelf: 'center',
        marginVertical: 20,
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingRight: 110,
      }}>
      <Facebook />
      <Typography
        text="Sign up with Facebook"
        color={colors.white}
        fontSize={14}
        fontWeight="400"
        fontFamily={fonts.InterBold}
      />
    </Pressable>
  );
};

export default FacebookBtn;
