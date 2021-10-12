import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Projeto de PRMO</Text>

      <Image source={require('./assets/Alce.jpg')} style={styles.foto}/>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  foto:{
    width: '100%',
    height: 200
  }
});
