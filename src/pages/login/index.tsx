import React from "react";
import { Image, View, Text, TextInput, TouchableOpacity } from "react-native";
import { style } from "./styles";
import { MaterialIcons } from '@expo/vector-icons'
import { themes } from "../../global/themes";

export default function Login() {
    return (
        <View style={style.container}>

            <View style={style.topBox}>
                <Image
                    source={require("../../assets/logo.png")}
                    style={style.logo}
                    resizeMode="contain"
                />

                <Text
                    style={style.textTitle}
                >
                    Welcome Back!</Text>

            </View>

            <View style={style.midBox}>

                <Text style={style.textInput}>E-mail Address</Text>
                <View style={style.boxInput}>
                    <TextInput style={style.input} inputMode="email"/>
                    <MaterialIcons name="email" size={24} color={themes.colors.secondary} />
                </View>


                <Text style={style.textInput}>Password</Text>
                <View style={style.boxInput}>
                    <TextInput style={style.input} inputMode="text"/>
                    <MaterialIcons name="password" size={24} color={themes.colors.secondary} />
                </View>

            </View>

            <View style={style.bottomBox}>
                <TouchableOpacity style={style.button}>
                    <Text style={style.buttonText}>Login</Text>
                </TouchableOpacity>
                <Text style={style.bottomText}>Don't have an account? <Text style={style.bottomTextHigh}>Sign up!</Text></Text>
            </View>

        </View>
    )
}