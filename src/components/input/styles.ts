import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({


    textInput: {
        fontWeight: 'bold',
        marginTop: 16,
        fontSize: 20,
        color: themes.colors.secondary,
    },

    boxInput: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 4,
        backgroundColor: themes.colors.light,
        borderColor: themes.colors.light

    },
    input: {
        height: '100%',
        width: '90%',
        color: themes.colors.secondary,

    }
})