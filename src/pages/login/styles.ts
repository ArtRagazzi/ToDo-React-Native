import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:32
    },

    topBox:{
        height:Dimensions.get('window').height/3,
        width:'100%',
        //backgroundColor:"yellow",
        alignItems:'center',
        justifyContent:'center'
    },

    midBox:{
        height:Dimensions.get('window').height/3,
        width:'100%',
        //backgroundColor:"blue",
    },

    bottomBox:{
        height:Dimensions.get('window').height/3,
        width:'100%',
        //backgroundColor:"green",
        alignItems:'center'
    },

    logo:{
        width:128,
        height:128,
        marginTop:16
    },
    textTitle:{
        fontWeight:'bold',
        color:themes.colors.primary,
        fontSize:32

    },
    
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
    bottomText:{
        fontSize:16,
        marginTop:16,
        color:themes.colors.secondary
    },

    bottomTextHigh:{
        fontSize:16,
        marginTop:16,
        fontWeight:'bold',
        color:themes.colors.primary
    }

})