import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {css} from '../../assets/css/Css';
import {Profile,Cadastro,Edicao} from '../index';

export default function AreaRestrita() {
    const Tab = createMaterialBottomTabNavigator();
    const [user, setUser] = useState(null);

    useEffect(()=>{
        async function getUser(){
            let response = await AsyncStorage.getItem('userData');
            let json = JSON.parse(response);
            setUser(json.name);
        }
        getUser();
    },[])

    return (
        
        
        <Tab.Navigator
                activeColor='#999'
                inactiveColor='#fff'
                initialRouteName="Profile"
                barStyle={css.area__tab}
        >
            <Tab.Screen
                    name="Perfil"
                    component={Profile}
                    options={{
                    tabBarIcon:()=>(
                        <Icon name="users" size={20} color="#999" />
                    )
                }}
            />
            <Tab.Screen
                    name="Cadastro"
                    component={Cadastro}
                    options={{
                    tabBarIcon:()=>(
                        <Icon name="archive" size={20} color="#999" />
                    )
                }}
            />
            <Tab.Screen
                    name="Edição"
                    component={Edicao}
                    options={{
                    tabBarIcon:()=>(
                        <Icon name="edit" size={20} color="#999" />
                    )
                }}
            />
        </Tab.Navigator>
    );
}