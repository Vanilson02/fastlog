import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View,Text, Button, Alert } from 'react-native';
import {css} from './assets/css/Css';
import {Home, Login, Rastreio} from './views';
import AreaRestrita from "./views/area_restrita/AreaRestrita";


export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={Home}
          options = {{
            title:"FastLog",
            headerStyle: {backgroundColor:'#e8e8e8'},
            headerTintColor:'#3f3f41',
            headerTitleStyle:{fontWeight:'bold',alignSelf:'center'}
          }}
        />
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen name="Rastreio" component={Rastreio} />
        <Stack.Screen name="AreaRestrita" options={{headerShown:false}} component={AreaRestrita} />


      </Stack.Navigator>
    </NavigationContainer>

  );
}