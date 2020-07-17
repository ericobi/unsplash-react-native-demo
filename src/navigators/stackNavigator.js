import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Search from '../screens/Search';
import Gallery from '../screens/Gallery';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Search" component={Search} resetOnBlur={true} />
        <Stack.Screen name="Gallery" component={Gallery} resetOnBlur={true} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
