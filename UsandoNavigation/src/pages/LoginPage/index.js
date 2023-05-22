import { Text, View } from "react-native";
import estilo from "./style";
import { Link } from '@react-navigation/native';

export default function LoginPage(){
    return(
        <View style = {estilo.container}>
        <Text style = {estilo.texto}>Essa é a página de Login</Text>
        <Link to= {{screen: "RegisterPage"}}> Ir para página de Registro </Link>
        </View>
    )
}
