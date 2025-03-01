import React, { useState } from "react";
import { Image, View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import { style } from "./styles";
import { MaterialIcons } from '@expo/vector-icons'
import { themes } from "../../global/themes";

export default function Login() {




    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)


    async function getLogin() {
        try {

            setLoading(true)


            if (!email || !password) {
                return Alert.alert("Login", "Informe os campos obrigatórios!")
            }

            setTimeout(() => {
                if (email === "artur@gmail.com" && password == "123") {
                    Alert.alert("Login", "Logado com sucesso!")
                } else {
                    Alert.alert("Login", "Usuario não encontrado!")
                }
                setLoading(false)
            }, 1500)

        } catch (error) {
            console.log("Erro: " + error)

        }

    }


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
                    <TextInput
                        style={style.input}
                        inputMode="email"
                        value={email}

                        onChangeText={(e) => {
                            setEmail(e)
                        }}
                    />
                    <MaterialIcons name="email" size={24} color={themes.colors.secondary} />
                </View>


                <Text style={style.textInput}>Password</Text>
                <View style={style.boxInput}>
                    <TextInput
                        style={style.input}
                        inputMode="text"
                        value={password}
                        secureTextEntry={showPassword}
                        onChangeText={(e) => {
                            setPassword(e)
                        }}
                    />
                    <TouchableOpacity onPress={()=>{showPassword? setShowPassword(false):setShowPassword(true)}}>
                        <MaterialIcons name="password" size={24} color={themes.colors.secondary} />
                    </TouchableOpacity>

                </View>

            </View>

            <View style={style.bottomBox}>
                <TouchableOpacity
                    style={style.button}
                    activeOpacity={0.8}
                    onPress={getLogin}
                >
                    {
                        loading ?
                            <ActivityIndicator color={'#FFF'} size={"small"} />
                            :
                            <Text style={style.buttonText}>Login</Text>
                    }

                </TouchableOpacity>
                <Text style={style.bottomText}>Don't have an account? <Text style={style.bottomTextHigh}>Sign up!</Text></Text>
            </View>

        </View>
    )
}