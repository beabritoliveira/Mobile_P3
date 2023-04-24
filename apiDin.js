import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export default function App() {

  let [filmes, setFilmes] = useState([]);//condiciona a renderização 

  useEffect(function(){
    fetch('https://api.otaviolube.com/api/filmes?populate=*')
    .then(resultado => resultado.json())
    .then(objeto => setFilmes(objeto.data)) //carrega o vetor; filmes > 0
  })

  return (
    <View style={styles.container}>
      {
        filmes.length > 0 ? 
        filmes.map(f => <Text>{f.attributes.titulo}</Text>) : 
        <ActivityIndicator size={'large'}/>
      }
      <StatusBar style="auto" />
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
});
