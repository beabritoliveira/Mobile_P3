import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Filmes from './crc/components/filme';



export default function App() {

  const cinema = [
      {
        titulo: 'Avatar',
        sinopse: 'Sinopse Avatar',
        preco: 'R$: 20,00',
        imgUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FAvatar_%2528filme%2529&psig=AOvVaw3WSZFhuCbkSiKMDQjjD-QT&ust=1680613414298000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCNjXh_vpjf4CFQAAAAAdAAAAABAD'
      },
      {
        titulo: 'John Wick 4',
        sinopse: 'Sinopse John Wick',
        preco: 'R$: 30,00',
        imgUrl: ''
      },
      {
        titulo: 'Homem formiga',
        sinopse: 'Sinopse Homem Formiga 3',
        preco: 'R$: 10,00',
        imgUrl: ''
      }
    
    ]

  return (
    <View style={styles.container}>
       {cinema.map(f => <Filmes cinema = {f}/>)}
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
