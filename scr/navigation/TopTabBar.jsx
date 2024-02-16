import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CummunityScreen from '../screens/CommunityScreen';
import {COLORS} from '../theme';
import UserIcon from 'react-native-vector-icons/FontAwesome';
import {TabBarData} from '../data/TabBarData';

const Tab = createMaterialTopTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
    initialRouteName='chat'
      screenOptions={{
        tabBarStyle: {
          backgroundColor: COLORS.primary,
        },
        tabBarActiveTintColor: COLORS.tertiary,
        tabBarInactiveTintColor: COLORS.secondaryColor,
        tabBarIndicatorStyle: {
          backgroundColor: COLORS.tertiary,
        },
      }}>
      <Tab.Screen
        name="Cummunity"
        component={CummunityScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => {
            return <UserIcon name="users" size={20} color={color} />;
          },
        }}
      />
      {TabBarData.map(item => {
        return (
          <Tab.Screen key={item.id} name={item.name} component={item.route} />
        );
      })}
    </Tab.Navigator>
  );
};

export default MyTabs;
