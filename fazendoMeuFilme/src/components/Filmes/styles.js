import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    caixa:{
        backgroundColor: "#00416A",
        padding: 10,
        borderRadius: 30,
        textAlign: "center",
        margin: '5%',
        width: "95%",
        flexDirection: "row",
        justifyContent: 'flex-start'
        
    },
    I:{
        width: '30%',
        height: 150,
        //backgroundColor: 'white',
        paddingRight: 10
    },
    D:{
        width: '70%',
        height: '100%',
    },
    img:{
        width: '100%',
        height: '100%',
        borderRadius: 30
    },
    titulo:{
        fontSize:"22px",
        fontWeight: "bold", 
        color: "white",
        marginBottom: 5
    },
    sinopse:{
        fontSize: "16px",
        textAlign: "justify",
        color: "white",
        marginBottom: 5
    },
    preco:{
        fontSize: "18px",
        color: "white",
        marginBottom: 5
    },
    sala:{
        fontSize:"18px",
        fontWeight:"bold",
        color: "white",
        marginBottom: 20
    }
});

export default estilo;