import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import Teste from './src/components/Teste';
import Contador from './src/components/contador/indexC';


export default function App() {
  return (
    <View style={styles.container}>
      <Teste texto = 'Testando'>
        <Image style={styles.img} source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}/>
      </Teste>

      <Contador/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: '20px'
  },
  img:{
    width: 50,
    height:50
  }
});
