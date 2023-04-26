import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import Card from './src/components/Cartao';
import { useEffect, useState } from 'react';


export default function App() {

  let [filmes, setFilmes] = useState([]);//condiciona a renderização 

  function vetorizacao(){
    fetch('https://api.otaviolube.com/api/filmes?populate=*')
    .then(resultado => resultado.json())
    .then(objeto => setFilmes(objeto.data)) //carrega o vetor; filmes > 0
  }
  
  useEffect(vetorizacao);

  //https://jsonviewer.stack.hu/#http://https://api.otaviolube.com/api/filmes?populate=*

  return (
    <View style={styles.container}>
      {filmes.length > 0 ?
      filmes.map(cinema => <Card props = {cinema}/>)
      :<ActivityIndicator/>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '##ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cabecalho:{
      paddingTop: 30,
      fontSize:"26px",
      fontWeight: "bold",
      color:"#57180B",
      fontFamily: "Georgia",
      paddingBottom: 20
  }
});
