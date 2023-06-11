import { View , Text} from "react-native";



export default function MoviesDetaisPage({ route }){
    
  const { props } = route.params;

  return(
       <View> 
          <Text>{props.attributes.sinopse}</Text>
       </View>
    );
}