import { Button, Text, View } from "react-native";
import estilo from "./stylesC";
import { useState } from "react";

function Contador(){
    // let numero = 0; // cria variável
    let [numero, setNumero] = useState(0);

    function incrementar(){
        //numero = numero + 1;
        setNumero(numero + 1);
        console.log(numero);
    }

    return(
        <View style={estilo.container}>
            <Text style = {estilo.texto}>Contador</Text>
            <Text style = {estilo.numero}>{numero}</Text>
            <Button color= 'green' title="Incrementar" onPress={incrementar}/>
        </View>
    );
}

export default Contador;
