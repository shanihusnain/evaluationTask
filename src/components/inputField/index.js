import React from 'react';
import {View, TextInput, StyleSheet, Pressable} from 'react-native';
import {Controller} from 'react-hook-form';
// import Ionicons from '@expo/vector-icons/Ionicons';
// import {Entypo, EvilIcons} from '@expo/vector-icons';

import * as SVGS from '../../assets/icons';

import colors from '../../assets/colors';
import Typography from '../typography';
// custom input field component which can be used for any React Native app.
const InputField = ({
  control,
  icon,
  initialValue,
  name,
  isRequired,
  errors,
  style,
  ...props
}) => {
  const Icon = SVGS[icon];

  const showNormalBorder = () => {
    return colors.white;
  };
  return (
    <Controller
      control={control}
      testID={name}
      rules={{
        required: isRequired,
      }}
      render={({
        field: {ref, onChange, onBlur, value},
        fieldState: {error},
      }) => (
        <>
          <View
            style={[
              styles.fieldView,
              {
                borderWidth: props?.errors === true ? 1 : 0,
                backgroundColor: colors.grey,

                borderColor:
                  props?.errors === true ? colors.red : showNormalBorder(),
                ...style,
              },
            ]}>
            <TextInput
              // error={props?.error}
              testID={name}
              placeholderTextColor={'red'}
              placeholder={props.placeHolder}
              style={[
                styles.inputFieldStyle,
                {
                  color: colors.white,
                },
              ]}
              keyboardType={props.keyboardType}
              onBlur={onBlur}
              onChangeText={onChange}
              value={initialValue ? initialValue : value}
              maxLength={props.maxLength}
              secureTextEntry={props.secureTextEntry}
            />
            {icon !== '' && icon !== 'LockedDark' && (
              <Icon fill={props?.fillColorIcon} />
            )}
            {icon === 'LockedDark' &&
              {
                /* <EvilIcons name="lock" size={30} color={props?.fillColorIcon} /> */
              }}
            {icon === 'atTheRate' &&
              {
                /* <Entypo name="email" size={30} color={props?.fillColorIcon} /> */
              }}
            {props?.showLeftText?.length > 0 && (
              <Typography
                style={{
                  marginRight: 10,
                }}
                text={props?.showLeftText}
                color={colors.grey}
                fontFamily={'InterMedium'}
                fontSize={12}
              />
            )}
            {props?.showToggleEye && (
              <Pressable onPress={() => props?.toggleSecurePassword()}>
                {/* <Ionicons
                  color={props?.fillColorIcon}
                  size={20}
                  name={props.secureTextEntry ? 'eye' : 'eye-off'}
                /> */}
              </Pressable>
            )}
          </View>
          {/*
          {error?.message && (
            <View style={{ width: "80%" }}>
              <Typography
                text={error?.message}
                textPosition="left"
                textDecorationLine="none"
                color={"red"}
                fontSize={14}
                style={{ marginBottom: 10 }}
                fontFamily={"InterBlack"}
                numberOfLines={2}
                allowFontScaling={false}
                ellipsizeMode={"tail"}
                textTransform={"none"}
                userSelect={"none"}
              />
            </View>
          )} */}
        </>
      )}
      name={name}
    />
  );
};

export default React.memo(InputField);

const styles = StyleSheet.create({
  fieldView: {
    flexDirection: 'row',
    backgroundColor: colors.grey,
    borderRadius: 14,
    height: 56,
    paddingHorizontal: 15,
    marginTop: 5,
    borderWidth: 1,
    marginBottom: 22,
    alignItems: 'center',
  },
  inputFieldStyle: {
    marginHorizontal: 10,
    color: colors.offWhite,
    fontSize: 16,
    flex: 1,
    height: '100%',
    fontFamily: 'InterMedium',
  },
});
