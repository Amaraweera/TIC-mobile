import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Events from '../screens/Events';
import Guiders from '../screens/Guiders';
import Home from '../screens/Home';
import Map from '../screens/Map';
import Bookings from '../screens/Bookings';
import Images from '../assets/images';
import {colors} from '../theme/colors';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          paddingHorizontal: 20,
          backgroundColor: colors.primaryColor,
        },
      }}>
      <Tab.Screen
        name="Events"
        component={Events}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={Images.navigation.events}
              style={{height: size, width: size}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Guiders"
        component={Guiders}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={Images.navigation.guiders}
              style={{height: size, width: size}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={Images.navigation.home}
              style={{height: size, width: size}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={Images.navigation.map}
              style={{height: size, width: size}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Bookings"
        component={Bookings}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={Images.navigation.bookings}
              style={{height: size, width: size}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
