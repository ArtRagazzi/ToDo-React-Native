import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({

    button:{
        width:'100%',
        height:52,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:themes.colors.primary,

        shadowColor:"#000",
        shadowOffset:{
            width:0,
            height:3,
        },
        shadowOpacity:0.30,
        shadowRadius:4.65,
        elevation:7
        

    },
    buttonText:{
        fontSize:16,
        color:themes.colors.light,
        fontWeight:'bold',
        textTransform:'uppercase',
    },
})