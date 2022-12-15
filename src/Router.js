import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Categories from './pages/Categories/Categories';
import Meals from './pages/Meal/Meals';
import Details from './pages/Details';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={{
            headerTitleStyle: {color: '#fb8c00', fontWeight: 'bold'},
          }}
        />
        <Stack.Screen
          name="Meals"
          component={Meals}
          options={{
            headerTitleStyle: {color: '#fb8c00', fontWeight: 'bold'},
            headerTintColor: '#fb8c00',
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerTitleStyle: {color: '#fb8c00', fontWeight: 'bold'},
            headerTintColor: '#fb8c00',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
