import { Image, TextInput, TouchableOpacity, View, Text } from "react-native";
import estilo from "./styles";
import { Link } from "@react-navigation/native";


export default function RegisterPage(){
    return(
        <View style = {estilo.container}> 
            <Image style = {estilo.imgLogo}
                    source = {{uri:'https://img.freepik.com/vetores-premium/modelo-de-design-de-logotipo-de-filme-de-rolo-de-camera-de-cinema_527727-210.jpg?w=2000 '}}/>
            <TextInput style = {estilo.emailInput} placeholder="E-mail"/>
            <TextInput style = {estilo.senhaInput} placeholder="Senha" secureTextEntry = {true}/>
            <TextInput style = {estilo.senhaInput} placeholder="Confirmar Senha" secureTextEntry = {true}/>
            <TouchableOpacity style = {estilo.btnRegister}>
                <Text style = {estilo.txtBtnRegister}>Register</Text>
            </TouchableOpacity>
            <View style ={estilo.viewLink}>
                <Link style ={estilo.link} to = {{screen: "Login"}} > Já tem Cadastro? </Link>
            </View>
        </View>
    )
}