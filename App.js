import {View, Text} from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductPage from './src/ProductPage';
import ProductDetails from './src/ProductDetails';

const Stack = createNativeStackNavigator();

const App = props => {
  const {navigation} = props;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ProductPage"
          options={{
            headerShown: false,
          }}>
          {props => <ProductPage {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name="ProductDetails"
          options={{
            headerShown: false,
          }}>
          {props => <ProductDetails {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
