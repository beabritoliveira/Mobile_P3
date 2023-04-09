import { Text , View} from "react-native";

import styles from "./styles";

function Teste({texto, children }){
    //props => permite que se passe parâmetros, propriedades pros componentes
    return(
        <View style = {styles.container}>
            { children }
            <Text style={styles.texto}> {texto} </Text>
        </View>
    );
}
 

export default Teste;
