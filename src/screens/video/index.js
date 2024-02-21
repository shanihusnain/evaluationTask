import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import React from 'react';
import colors from '../../assets/colors';
import Typography from '../../components/typography';
import fonts from '../../assets/fonts';
import {CoinImage, ProfileImageOne, ProfileImageTwo} from '../../assets/images';
import InfoCard from './Components/InfoCard';

const Video = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Typography
          text={'Video Calls'}
          fontFamily={fonts.InterBlack}
          color={colors.white}
          fontSize={20}
          fontWeight="700"
        />
      </View>
      <Typography
        text={'Your Calls'}
        fontFamily={fonts.InterBlack}
        color={colors.white}
        fontSize={20}
        fontWeight="700"
        style={{marginVertical: 20}}
      />
      <ScrollView style={{flexGrow: 1, marginBottom: 50}}>
        <InfoCard
          title={'Free info Session 1 on 1'}
          imageSource={ProfileImageOne}
        />
        <InfoCard
          title={'Onboarding 1 on 1 Session'}
          imageSource={ProfileImageTwo}
        />
        <InfoCard
          title={'Free info Session 1 on 1'}
          imageSource={ProfileImageOne}
        />
        <Typography
          text={'Need more help? you can book more calls with us'}
          fontFamily={fonts.InterBlack}
          color={colors.white}
          fontSize={20}
          fontWeight="700"
        />
        <InfoCard title={'Free info Session 1 on 1'} imageSource={CoinImage} />
        <InfoCard title={'Free info Session 1 on 1'} imageSource={CoinImage} />
      </ScrollView>
    </View>
  );
};

export default Video;
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
});
