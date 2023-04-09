import {StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    texto:{
        fontSize: '40px',
        fontWeight: 'bold',
        color: 'green'
    },
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: '70%',
        borderRadius: 10,
        padding: 10
    },
    numero:{
        fontSize: '50px',
        color: 'black'
    }
});

export default estilo;