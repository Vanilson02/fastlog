import React, {useState,useEffect} from 'react';
import {KeyboardAvoidingView, Platform, TouchableOpacity, Text, TextInput, View, Button, Image} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {css} from '../assets/css/Css';
import * as LocalAuthentication from 'expo-local-authentication';


export default function Login({navigation}){

    const [display,setDisplay]=useState('none');
    const [user,setUser]=useState('null');
    const [password,setPassword]=useState('null');
    const [login,setLogin]=useState('null');
    
    useEffect(()=>{
        verifyLogin();
    },[])

    useEffect(()=>{
        if(login === true){
            biometric();
        }
    },[login])

    // verifica se o usuario já possui login
    async function verifyLogin(){
        let response = await AsyncStorage.getItem('userData')
        let json = await JSON.parse(response);
        if(json !== null){
            setUser(json.name);
            setPassword(json.password);
            setLogin(true);
        }
    }
    
    // biometria 
    async function biometric(){
        let compatible= await LocalAuthentication.hasHardwareAsync();
        // verifica se o hardware de biometria existe
        if(compatible){
            let biometricRecords = await LocalAuthentication.isEnrolledAsync();
            // verifica se existe digital cadastrada
            if(!biometricRecords){
                alert('Biometria não cadastrada');
            }else{
                let result=await  LocalAuthentication.authenticateAsync();
                // tendo digital cadastrada envia os dados para logar
                if(result.success){
                    sendForm();
                // senão limpa os valores
                }else{
                    setUser(null);
                    setPassword(null);
                }
            }
        }
    }

    // envia dados do formulario
    async function sendForm(){

        let response = await fetch('http://10.0.0.107:3000/login',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                name: user,
                password: password
            })
        });
        let json = await response.json();
        if(json === 'error'){
            setDisplay('flex');
            setTimeout(()=>{
                setDisplay('none');
            },5000);
            await AsyncStorage.clear();
        }else{
            await AsyncStorage.setItem('userData',JSON.stringify(json));
            navigation.navigate('AreaRestrita');
        }
    }
    return(
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={[css.container,css.darkbg]}>

            <View style={css.login__logomarca}>
                <Image source={require('../assets/img/logoFastLog.png')} />
            </View>
            
            <View>
                <Text style={css.login__msg(display)}>Usuário ou senha inválidos</Text>
            </View>

            <View style={css.login__form}>
                <TextInput style={css.login__input} placeholder='Usuário:' onChangeText={text=>setUser(text)}/>
                <TextInput style={css.login__input} placeholder='Senha:' onChangeText={text=>setPassword(text)} secureTextEntry={true}/>
                <TouchableOpacity style={css.login__button} onPress={()=>sendForm()}>
                    <Text style={css.login__buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>

        </KeyboardAvoidingView>

    )
}