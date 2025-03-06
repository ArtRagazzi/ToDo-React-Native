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