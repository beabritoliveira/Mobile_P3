import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Filmes from './src/components/Filmes';

export default function App() {

  const cinema = [
    {
      titulo: "Encanto",
      sinopse: "Quando Anthonio chega na idade de ganhar um poder, Mirabel se vê cada vez mais rebaixada pela família e ao perceber que o encanto poderia ruir Mirabel tenta ajudar sua família de toda maneira",
      preco: "R$: 25,00",
      sala: "02",
      horario: "19:00",
      img: "https://cdnim.prd.cineticket.com.br/asset/movie/7938/super-mario-bros-o-filme-poster-desktop-4968c.jpg"
    },
    {
      titulo: "Luca",
      sinopse: "Um menino sereia se aventura na terra e faz amigos, descobrindo as excentricidades da terra",
      preco: "R$: 20,00",
      sala: "05",
      horario: "17:00",
      img: "https://cdnim.prd.cineticket.com.br/asset/movie/7861/a-pequena-sereia-poster-desktop-4972c.jpg"
    },
    {
      titulo: "Alladin",
      sinopse: "Um ladrão se apaixona por uma princesa, que se disfarçou para sair do palacio, depois de ser perseguido por guardas e faz de tudo para conquista-la coma ajuda e um gênio da lâmpada",
      preco: "R$: 15,00",
      sala: "03",
      horario: "17:00",
      img: "https://cdnim.prd.cineticket.com.br/asset/movie/7974/barbie-poster-desktop-4952c.jpg"
    },
    {
      titulo: "Princesa e o Sapo",
      sinopse: "Tiana conhece Navin e após beija-lo vira um sapo e passam por uma jornada para reverter o feitiço",
      preco: "R$: 15,00" ,
      sala: "02",
      horario: "15:00",
      img: "https://cdnim.prd.cineticket.com.br/asset/movie/7669/spider-man-across-the-spider-verse-part-one-poster-desktop-4937c.png"
    }

  ]
  return (
    
    <View style={styles.container}>
      {cinema.map(num => <Filmes f={num}/>)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', //'#7BA05B',
    alignItems: 'center',
    justifyContent: 'center'
  },
  texto:{
    //color: "white",
    fontWeight: "bold"
  }
});
