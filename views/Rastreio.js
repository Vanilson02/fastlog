import React from 'react';
import {Text, View, Button} from 'react-native';

export default function Home({navigation}) {
    return (
        <View>
            <Text>Esse é o componente Rastreio ()</Text>
            <Button 
                    title='ir pra Login'
                    onPress={()=>navigation.navigate('Login', {
                    id: 12
                    })}
            />
        </View>
    );
}