import {View, Text, Image, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../../../assets/colors';
import Typography from '../../../components/typography';
import fonts from '../../../assets/fonts';

const InfoCard = ({imageSource, title}) => {
  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <View style={{width: 280, marginLeft: 10}}>
        <Typography
          text={title}
          fontFamily={fonts.InterBlack}
          color={colors.white}
          fontSize={12}
          fontWeight="500"
        />
        <Typography
          text={
            'Welcome to STARGATE’S first ever Accelerator Course where you get the opportunity to learn about the history of money, the opportunity of crypto, and what’s to come! '
          }
          fontFamily={fonts.InterBlack}
          color={colors.greyTxt}
          fontSize={12}
          fontWeight="500"
        />
        <View style={styles.btnsWrapper}>
          <Pressable style={styles.btnComplete}>
            <Typography
              text={'Completed'}
              fontFamily={fonts.InterBlack}
              color={colors.yellow}
              fontSize={10}
              fontWeight="400"
            />
          </Pressable>
          <Typography
            text={'30 mins'}
            fontFamily={fonts.InterBlack}
            color={colors.white}
            fontSize={8}
            fontWeight="500"
          />
        </View>
      </View>
    </View>
  );
};

export default InfoCard;
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 40,
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
  },
  image: {height: 98, width: 98, borderRadius: 40},
  btnsWrapper: {
    flexDirection: 'row',

    marginTop: 20,
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingHorizontal: 10,
  },
  btnComplete: {
    width: 80,
    borderRadius: 4,
    backgroundColor: colors.greyBtn,
    paddingVertical: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
