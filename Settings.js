import * as React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';


function Settings({navigation}) {
  return (
    <View style={styles.container}> 
      <Text>Settings Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

export default Settings;