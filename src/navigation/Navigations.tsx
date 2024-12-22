import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import UserDetails from '../screens/UserDetails';
import {RootStackParamList} from '../type/Navigation.types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen component={Home} name="Home" />
        <Stack.Screen component={UserDetails} name="UserDetails" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
