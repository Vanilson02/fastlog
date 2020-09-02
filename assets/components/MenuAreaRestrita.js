import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {css} from '../../assets/css/Css';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function MenuAreaRestrita(props){
    
    async function logout(){
        await AsyncStorage.clear();
        navigation.navigate('Login');
    }

    return (
        <View style={css.area__menu} >

            <TouchableOpacity style={css.button__home2} onPress={()=>props.navigation.navigate('Home')}>
                <Icon name="home" size={20} color="#999"/>
            </TouchableOpacity>

                <Text style={css.area__title}>{props.title}</Text>

            <TouchableOpacity style={css.button__logout} onPress={()=>logout()}>
                <Icon name="sign-out" size={20} color="#999" />
            </TouchableOpacity>
        </View>
    );
}