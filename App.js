import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {
  TouchableOpacity,
  Image
} from 'react-native'
//screens 
import {Home, ItemDetail} from './screens/';
import { icons, images, SIZES, COLORS } from './constants';
const theme={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    border: 'transparent',
  }
};

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName= {"Home"}
      >
        <Stack.Screen  name="Home" component={Home} />
        <Stack.Screen  name="ItemDetail" component={ItemDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default () => {
  return <App />;
};