import { Dimensions, Image, StyleSheet, TouchableOpacity, View } from "react-native";

const baseURL = 'https://api.otaviolube.com'

//Pega a dimensão da tela que está sendo utilizada, pode ser passado no estilo
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default function Cartao({ filme }){
    return(
        <View style = {est.viewCartao}>
            <Image style = {est.imgFilme} source = {{uri: baseURL + filme.poster.data.attributes.url}}/>
            <Text style = {est.titulo}>{filme.titulo}</Text>
            <Text style = {est.sinopse}>{filme.sinopse}</Text>
            <TouchableOpacity style = {est.btnComprar}>
                <Text style = {est.txtbtnComprar}>Comprar</Text>
            </TouchableOpacity>
        </View>
    )
}

const est = StyleSheet.create({
    viewCartao:{

    }
})
