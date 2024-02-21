import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/home';
import {
  CoursesIcon,
  HomeIcon,
  MailIcon,
  PortFolio,
  SignalsIcon,
  VideoIcon,
} from '../../assets/icons';
import {styles} from './styles';
import colors from '../../assets/colors';
import {View} from 'react-native';
import Portfolio from '../../screens/portfolio';
import Signals from '../../screens/signals';
import Courses from '../../screens/courses';
import Video from '../../screens/video';

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarLabel: true,
        tabBarStyle: {
          height: 60,
          paddingHorizontal: 5,
          paddingTop: 0,
          backgroundColor: colors.grey,
          position: 'absolute',
          borderTopWidth: 0,
        },
        tabBarIcon: ({focused}) => {
          var Icon: any;
          switch (route.name) {
            case 'Portfolio':
              Icon = PortFolio;
              break;
            case 'Home':
              Icon = HomeIcon;
              break;
            case 'Signals':
              Icon = SignalsIcon;
              break;
            case 'Courses':
              Icon = CoursesIcon;
              break;
            case 'Video':
              Icon = VideoIcon;
              break;

            default:
              break;
          }
          return (
            <View style={{alignItems: 'center'}}>
              {focused && (
                <View
                  style={{
                    height: 2,
                    backgroundColor: colors.yellow,
                    width: 40,
                    bottom: 20,
                  }}
                />
              )}

              {route.name !== 'Home' ? (
                <Icon color={focused ? colors.yellow : colors.grey} />
              ) : (
                <Icon
                  color={focused ? colors.yellow : colors.grey}
                  fill={focused ? colors.yellow : colors.grey}
                />
              )}

              {focused && <View style={styles.bottomDot} />}
            </View>
          );
        },
      })}>
      <Tab.Screen name="Portfolio" component={Portfolio} />
      <Tab.Screen name="Signals" component={Signals} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Courses" component={Courses} />
      <Tab.Screen name="Video" component={Video} />
    </Tab.Navigator>
  );
}
export default MyTabs;
