import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        alignSelf: 'center',
        height: '100%'
    },  
    email:{
        marginTop: 15,
        width: '70%',
        height: 40,
        alignItems: 'center',
        borderRadius: 15,
        padding: 12,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'dark purple'
    },
    senha:{
        marginTop: 8,
        width: '70%',
        height: 40,
        alignItems: 'center',
        borderRadius: 15,
        padding: 12,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'dark purple'
    },
    imgLogo:{
        height: '150px',
        width: '150px'
    },
    btn:{
        margin: 15,
        backgroundColor:'purple',
        borderRadius: 10,
        padding: 10
    },
    tBtn:{
        color: "white",
        fontSize: '16px',
        fontWeight: 'bold',
        fontFamily: 'Cambria'
    },
    viewLink:{
        marginTop: 20,
        width: '70%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    link:{
        fontWeight: 'bold',
        fontSize: '16px'
    }
});

export default estilo;