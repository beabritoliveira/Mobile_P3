import { Text, View } from "react-native";
import estilo from "./style";
import { Link } from '@react-navigation/native';

export default function RegisterPage(){
    return(
        <View style = {estilo.container}>
        <Text style = {estilo.texto}>Essa é a página de Registro</Text>
        </View>
    )
}
