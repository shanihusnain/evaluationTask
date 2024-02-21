import {View, Text, Pressable, StyleSheet, Dimensions} from 'react-native';
import React, {useState} from 'react';
import colors from '../../assets/colors';
import Typography from '../../components/typography';
import fonts from '../../assets/fonts';
import {yupResolver} from '@hookform/resolvers/yup';
import {signUpSchema} from '../../../constants/validaton';
import {useForm} from 'react-hook-form';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import InputField from '../../components/inputField';
import {Checkbox} from 'react-native-paper';
import {CheckBox} from '../../assets/icons';
import PrimaryButton from '../../components/Primarybutton';
import DiscordBtn from './Components/DiscordBtn';
import FacebookBtn from './Components/FacebookBtn';
import GoogleBtn from './Components/GoogleBtn';

const {height, width} = Dimensions.get('window');
const Signup = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    defaultValues: {
      email: '',
      name: '',
      username: '',
      password: '',
      dateOfBirth: '',
    },
    resolver: yupResolver(signUpSchema),
    mode: 'all',
  });
  const [checked, setChecked] = React.useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Typography
          text={'Sign Up'}
          fontFamily={fonts.InterBlack}
          color={colors.white}
          fontSize={20}
          fontWeight="700"
        />
      </View>
      <KeyboardAwareScrollView>
        <View style={styles.nameInputWrapper}>
          <InputField
            control={control}
            name="name"
            // errors={!!errors?.name}
            isRequired={true}
            placeholder={'First Name'}
            placeholderColor={colors.white}
            keyboardType="default"
            icon=""
            secureTextEntry={false}
            showToggleEye={false}
            style={{width: width / 2.2}}
            initialValue={'First Name'}
          />

          <InputField
            control={control}
            name="lastName"
            // errors={!!errors?.lastName}
            isRequired={true}
            placeholder={'Last Name'}
            placeholderColor={colors.offWhite}
            keyboardType="default"
            icon=""
            secureTextEntry={false}
            showToggleEye={false}
            initialValue={'Last Name'}
            style={{width: width / 2.2, fontSize: 12}}
          />
        </View>
        <InputField
          control={control}
          name="email"
          errors={!!errors?.email}
          // errorMessage={errors.email?.message}
          isRequired={true}
          keyboardType="email-address"
          secureTextEntry={false}
          showToggleEye={false}
          icon="MailIcon"
          initialValue={'Email'}
          placeholder="Email Address"
        />
        <InputField
          control={control}
          name="email"
          errors={!!errors?.email}
          // errorMessage={errors.email?.message}
          isRequired={true}
          keyboardType="email-address"
          secureTextEntry={false}
          showToggleEye={false}
          icon="Discord"
          initialValue={'Discord Username'}
          placeholder="Email Address"
        />
        <InputField
          control={control}
          name="email"
          errors={!!errors?.email}
          // errorMessage={errors.email?.message}
          isRequired={true}
          keyboardType="email-address"
          secureTextEntry={false}
          showToggleEye={false}
          icon="LockIcon"
          initialValue={'password'}
          placeholder="Email Address"
        />
        <View style={styles.checkBoxWrapper}>
          <CheckBox color={colors.white} />
          <Typography
            text={'I agree to the terms and conditions of '}
            fontSize={14}
            fontFamily={fonts.InterMedium}
            color={colors.offWhite}
            style={{marginLeft: 10}}
          />
          <Typography
            text={'Privacy Policy'}
            fontSize={14}
            fontFamily={fonts.InterMedium}
            color={colors.yellow}
            style={{marginLeft: 10}}
          />
        </View>
        <PrimaryButton
          title={'Sign Up'}
          onPress={() => navigation.navigate('MyTabs')}
        />
        <View style={styles.orWrapper}>
          <View style={styles.line} />
          <Typography
            text={'OR'}
            fontSize={14}
            fontFamily={fonts.InterMedium}
            color={colors.or}
            style={{marginLeft: 10}}
          />
          <View style={styles.line} />
        </View>
        <DiscordBtn />
        <FacebookBtn />
        <GoogleBtn />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Typography
            text={'Already have an account'}
            fontSize={14}
            fontFamily={fonts.InterMedium}
            color={colors.or}
            style={{marginLeft: 10}}
          />
          <Pressable style={styles.bottomTxt}>
            <Typography
              text={'Sign in'}
              fontSize={14}
              fontFamily={fonts.InterMedium}
              color={colors.yellow}
              style={{}}
            />
          </Pressable>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Signup;
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.black},
  header: {
    height: 50,
    backgroundColor: colors.grey,
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameInputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    width: width,
    marginTop: 50,
  },
  checkBoxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  orWrapper: {
    flexDirection: 'row',
    marginVertical: 20,
    alignContent: 'center',
    justifyContent: 'center',
  },
  line: {height: 2, width: '30%', backgroundColor: colors.line},
  bottomTxt: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
