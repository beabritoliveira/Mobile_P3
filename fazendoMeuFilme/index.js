import { Button, Image, StyleSheet, Text, View } from "react-native";
import estilo from "./styles";

export default function Filmes(props){
    return(
        <View style={estilo.caixa}>
            <View style={estilo.I}>
                <Image source={{uri: props.f.img}} style={estilo.img}/>
            </View>

            <View style={estilo.D}>
                <Text style={estilo.titulo} >{props.f.titulo}</Text>
                <Text style={estilo.sinopse}>{props.f.sinopse}</Text>
                <Text style={estilo.preco}  >{props.f.preco}</Text>
                <Text style={estilo.sala}   >Sala: {props.f.sala} - {props.f.horario}</Text>
                <Button title="COMPRAR"/>
            </View>
        </View>
    );
}

