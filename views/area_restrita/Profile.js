import React, {useState,useEffect} from 'react';
import {View, Text, TextInput} from 'react-native';
import {css} from '../../assets/css/Css';
import MenuAreaRestrita from '../../assets/components/MenuAreaRestrita';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import config from '../../config/config';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Profile({navigation}) {
    
    const [idUser, setIdUser] = useState(null);
    const [userName, setName] = useState(null);
    const [senhaAntiga, setSenhaAntiga] = useState(null);
    const [novaSenha, setNovaSenha] = useState(null);
    const [confNovaSenha, setConfNovaSenha] = useState(null);
    const [msg, setMsg] = useState(null);
    const [cor,setCor]=useState('#ff0000');


    useEffect(()=>{
        async function getIdUser(){
            let response = await AsyncStorage.getItem('userData');
            let json = await JSON.parse(response);
            setIdUser(json.id);
            setName(json.name);
            
        }
        getIdUser();
    });

    async function sendForm(){
        let response = await fetch(`${config.urlRoot}verifyPass`,{
            method:'POST',
            body:JSON.stringify({
                id: idUser,
                senhaAntiga: senhaAntiga,
                novaSenha: novaSenha,
                confNovaSenha: confNovaSenha
            }),

            headers: {
                Accept: 'application/json',
                'Content-Type' : 'application/json'
            }

        });

       let json = await response.json();
       if(json === "Senha atualizada com sucesso!"){
           setCor("#4888f4");
       }else{
           setCor("#ff0000");
       }
       
       setMsg(json);
    }
    


    return (
        <View style={[css.container, css.containerTop]}>
            <MenuAreaRestrita title='Perfil' navigation={navigation}/>
            <View>
                <View style={css.profDados}>                   
                    <Icon name="user-circle" size={80} color="#dc483c"/>
                     <Text>{userName}</Text>
                </View>

                <Text style={css.profAlt__msg(cor)}>{msg}</Text>
                <Text>Senha: </Text>
                <TextInput style={css.profAlt__input} placeholder='Senha Antiga:'  onChangeText={text=>setSenhaAntiga(text)}/>
                <Text >Nova senha: </Text>
                <TextInput style={css.profAlt__input} placeholder='Nova Senha:'  onChangeText={text=>setNovaSenha(text)}/>
                <Text>Confirmar nova senha: </Text>
                <TextInput style={css.profAlt__input} placeholder='Confirmar Nova Senha:'  onChangeText={text=>setConfNovaSenha(text)}/>
                <TouchableOpacity style={css.btnProfileAlt} onPress={()=>sendForm()}>
                    <Text style={css.profAlt__btnText}>Alterar Senha</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}