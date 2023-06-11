import { Image, TextInput, TouchableOpacity, View, Text } from "react-native";
import estilo from "./styles";
import { Link } from "@react-navigation/native";


export default function ForgotPasswordPage(){
    return(
        <View style = {estilo.container}> 
            <Image style = {estilo.imgLogo}
                    source = {{uri:'https://img.freepik.com/vetores-premium/modelo-de-design-de-logotipo-de-filme-de-rolo-de-camera-de-cinema_527727-210.jpg?w=2000 '}}/>
            <TextInput style = {estilo.emailInput} placeholder="E-mail"/>
            <TouchableOpacity style = {estilo.btnFG}>
                <Text style = {estilo.txtBtnFG}>Mandar Email</Text>
            </TouchableOpacity>
            <View style ={estilo.viewLink}>
                <Link style ={estilo.link} to = {{screen: "Register"}} > Cadastrar </Link>
                <Link style ={estilo.link} to = {{screen: "Login"}}> Login </Link>
            </View>
        </View>
    )
}