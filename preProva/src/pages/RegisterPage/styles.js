import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgLogo:{
        width: '150px',
        height: '150px'
    },
    emailInput:{
        marginTop: 15,
        width: '75%',
        height: 40,
        alignItems: 'center',
        borderRadius: 10,
        padding: 12,
        backgroundColor: 'white'
    },
    senhaInput:{
        marginTop: 8,
        width: '75%',
        height: 40,
        alignItems: 'center',
        borderRadius: 10,
        padding: 12,
        backgroundColor: 'white'
    },
    btnRegister:{
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: '60%',
        marginTop:20,
        backgroundColor: '#e0d2c5',
        borderRadius: 30
    },
    txtBtnRegister:{
        fontSize: '20px',
        fontWeight: 'bold'
    },
    viewLink:{
        marginTop: 20,
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    link:{
        fontWeight: 'bold',
        fontSize: '16px'
    }
});

export default estilo;
