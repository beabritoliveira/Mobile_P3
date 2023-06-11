import { Image, TextInput, TouchableOpacity, View, Text } from "react-native";
import estilo from "./styles";
import { Link } from "@react-navigation/native";

export default function LoginPage(){
    return(
        <View style = {estilo.container}> 
            <Image style = {estilo.imgLogo}
                    source = {{uri:'https://img.freepik.com/vetores-premium/modelo-de-design-de-logotipo-de-filme-de-rolo-de-camera-de-cinema_527727-210.jpg?w=2000 '}}/>
            <TextInput style = {estilo.emailInput} placeholder="E-mail"/>
            <TextInput style = {estilo.senhaInput} placeholder="Senha" secureTextEntry = {true}/>
            <TouchableOpacity style = {estilo.btnLogin}>
                <Text style = {estilo.txtBtnLogin}>Login</Text>
            </TouchableOpacity>
            <View style ={estilo.viewLink}>
                <Link style ={estilo.link} to = {{screen: "Register"}} > Cadastrar </Link>
                <Link style ={estilo.link} to = {{screen: "ForgotPassword"}}> Esqueceu a senha </Link>
            </View>
        </View>
    )
}
