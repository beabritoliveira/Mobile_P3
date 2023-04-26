import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import estilo from "./style";

const baseURL = 'https://api.otaviolube.com';

export default function Card({ props }){
    return(
        <View style = {estilo.caixa}>
            <View style ={estilo.I}>
                <Image style = {estilo.img} source={{uri: 'https://api.otaviolube.com' + props.attributes.poster.data.attributes.url}}/>
            </View>
            <View style = {estilo.D}>
                <Text style ={estilo.nome}>{props.attributes.titulo}</Text>
                <Text style = {estilo.descricao}>{props.attributes.sinopse}</Text>
                <TouchableOpacity>
                    <View style = {estilo.btn}>
                        <Button color = '#c6d4e1' title ='Horários disponíveis'/>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
