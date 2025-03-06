import { MaterialIcons, Octicons } from '@expo/vector-icons';
import React, { useState } from "react";
import { Alert, Image, Text, View } from "react-native";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { style } from "./styles";

export default function Login() {




    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)


    async function getLogin() {
        try {

            setLoading(true)


            if (!email || !password) {
                Alert.alert("Login", "Informe os campos obrigatórios!")
                setLoading(false);
                return 
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
            setLoading(false);
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
                <Input
                    title="E-mail Address"
                    iconRightName="email"
                    IconRight={MaterialIcons}
                    value={email}
                    onChangeText={setEmail}
                    inputMode="email"
                />
                <Input

                    value={password}
                    onChangeText={setPassword}
                    title="Password"
                    IconRight={Octicons}
                    iconRightName={showPassword?"eye":"eye-closed"}
                    onIconRightPress={() => {
                        showPassword ? setShowPassword(false) : setShowPassword(true)
                    }}
                    secureTextEntry={!showPassword}
                />
            </View>

            <View style={style.bottomBox}>
                
                <Button 
                    text="Login"   
                    onPress={getLogin} 
                    loading={loading}
                />

                
                <Text style={style.bottomText}>Don't have an account? <Text style={style.bottomTextHigh}>Sign up!</Text></Text>
            </View>

        </View>
    )
}