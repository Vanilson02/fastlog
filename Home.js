import * as React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';


function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}

export default Home;