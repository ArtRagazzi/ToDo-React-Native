import React from "react";
import { ActivityIndicator, Text, TouchableHighlightProps, TouchableOpacity } from "react-native";
import { style } from "./styles";


type Props = TouchableHighlightProps & {
    text: string,
    loading?: boolean
}

export function Button({ loading, text, ...rest }: Props) {
    return (
        <TouchableOpacity style={style.button} activeOpacity={0.7} {...rest}>
            
            {loading ? (
                <ActivityIndicator color={"#FFF"} size={"small"} />
            ) : (
                <Text style={style.buttonText}>{text}</Text>
            )}
        </TouchableOpacity>
    );
}