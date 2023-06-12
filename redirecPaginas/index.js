import { Text, View, Image , TouchableOpacity} from "react-native";
import { TextInput } from "react-native";
import estilo from "./styles";
import { Link } from "@react-navigation/native";

export default function ForgotPasswordPage(){
    return(
        <View style = {estilo.container}>
            <Image style={estilo.imgLogo} source={{uri: 'https://www.adobe.com/br/express/create/logo/media_16813251f1fb1fd75bebbe277fa89c18e348e14a1.jpeg?width=400&format=jpeg&optimize=medium'}}/>
            <TextInput style = {estilo.email} placeholder="E-mail"/>
            <TouchableOpacity>
                    <View style = {estilo.btn}>
                       <Text style = {estilo.tBtn}>Enviar Email</Text>
                    </View>
                </TouchableOpacity>
            <View style ={estilo.viewLink}>
                <Link style ={estilo.link} to = {{screen: "RegisterPage"}} > Não possuo cadastro </Link>
            </View>  
        
        </View>
    );
}